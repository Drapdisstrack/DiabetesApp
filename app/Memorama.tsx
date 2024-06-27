import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { IconButton, ProgressBar } from "react-native-paper";

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

const shuffle = (array: any[]): any[] => {
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

  const handleTapCard = (index: number) => {
    if (selectedCards.length >= 2 || selectedCards.includes(index)) return;
    setSelectedCards([...selectedCards, index]);
  };

  const didPlayerWin = () => matchedCards.length === board.length;

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
            {didPlayerWin() ? "Felicidades 🎉" : "Memorama"}
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
