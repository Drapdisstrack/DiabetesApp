import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { IconButton, ProgressBar } from "react-native-paper";
import { getCurrentUser, updateUserExperience } from '../hooks/firebaseService'; // Ajusta la ruta según tu estructura
import Card from "../components/Card";

const cards = ["🍛", "💊", "🥕", "🏥"];

const generateRandomBoard = (cards: string[]): string[] => {
  const board: string[] = [];
  const shuffledCards = shuffle([...cards]);
  for (let i = 0; i < shuffledCards.length; i++) {
    board.push(shuffledCards[i]);
  }
  return board;
};

const shuffle = (array: string[]): string[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
};

const Memorama: React.FC = () => {
  const [board, setBoard] = React.useState(() => generateRandomBoard([...cards, ...cards]));
  const [selectedCards, setSelectedCards] = React.useState<number[]>([]);
  const [matchedCards, setMatchedCards] = React.useState<number[]>([]);
  const [score, setScore] = React.useState(0);
  const [hasPlayerWon, setHasPlayerWon] = React.useState(false);

  React.useEffect(() => {
    if (selectedCards.length < 2) return;

    if (board[selectedCards[0]] === board[selectedCards[1]]) {
      setMatchedCards([...matchedCards, ...selectedCards]);
      setSelectedCards([]);
      setScore(score + 1);
    } else {
      const timeoutId = setTimeout(() => setSelectedCards([]), 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [selectedCards]);

  React.useEffect(() => {
    const checkWin = async () => {
      if (matchedCards.length === board.length) {
        const playerWon = await didPlayerWin();
        setHasPlayerWon(playerWon);
      }
    };
    checkWin();
  }, [matchedCards, board.length]);

  const handleTapCard = (index: number) => {
    if (selectedCards.length >= 2 || selectedCards.includes(index)) return;
    setSelectedCards([...selectedCards, index]);
  };

  const didPlayerWin = async (): Promise<boolean> => {
    if (matchedCards.length === board.length) {
      const currentUser = getCurrentUser();
      if (currentUser) {
        await updateUserExperience(currentUser.uid, 50); // Aumenta 50 puntos de experiencia
      }
      return true;
    }
    return false;
  };

  const progress = score > 0 ? Math.min(1, (score + 0.5) / 4) : 0;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <IconButton
          icon="menu"
          onPress={() => console.log("Menu button pressed")}
          style={styles.menuButton}
          size={40}
        />
        <Text style={styles.scoreText}>Puntos: {score}</Text>
      </View>

      <View style={styles.boardContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {hasPlayerWon ? "Felicidades 🎉" : "Memorama"}
          </Text>
        </View>

        <View style={styles.progressBarContainer}>
          <ProgressBar progress={progress} color="#4A8CF0" style={styles.progressBar} />
        </View>

        <View style={styles.board}>
          {board.map((card, index) => {
            const isTurnedOver = selectedCards.includes(index) || matchedCards.includes(index);
            return (
              <Card key={index} isTurnedOver={isTurnedOver} onPress={() => handleTapCard(index)}>
                {card}
              </Card>
            );
          })}
        </View>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingTop: 60,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  scoreText: {
    fontWeight: "700",
    color: "black",
    fontSize: 25,
  },
  progressBarContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  progressBar: {
    width: 300,
    height: 20,
    borderRadius: 20,
  },
  boardContainer: {
    backgroundColor: "white",
    width: 350,
    height: 630,
    borderRadius: 20,
  },
  board: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 25,
  },
  title: {
    fontSize: 25,
    fontWeight: "900",
    color: "black",
    marginVertical: 15,
    textAlign: "center",
  },
  menuButton: {
    marginRight: 10,
  },
});

export default Memorama;
