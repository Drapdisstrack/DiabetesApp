import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import DatePicker from "../components/DatePicker";
import NextButton from "../components/NextButton";
import { useRouter } from "expo-router";
import { auth, db } from "./auth/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { Provider as PaperProvider } from "react-native-paper";
import { LightTheme } from "../constants/Theme";

const BirthdateScreen: React.FC = () => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleSubmit = async () => {
    const user = auth.currentUser;
    if (user && selectedDate) {
      const userDoc = doc(db, "users", user.uid);
      const day = selectedDate.getDate().toString().padStart(2, "0");
      const month = (selectedDate.getMonth() + 1).toString().padStart(2, "0");
      const year = selectedDate.getFullYear().toString();
      await updateDoc(userDoc, {
        birthdate: `${year}-${month}-${day}`,
      });
      router.navigate("./Home");
    }
  };

  return (
    <PaperProvider theme={LightTheme}>
      <View style={styles.container}>
        <Image source={require("../assets/images/date.png")} style={styles.image} />
        <Text style={styles.headline}>Seleccione su fecha de nacimiento</Text>
        <DatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
        <NextButton onSubmit={handleSubmit} />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: 100,
    height: 100,
  },
  headline: {
    fontSize: 20,
    marginBottom: 20,
    color: "#000000",
  },
});

export default BirthdateScreen;
