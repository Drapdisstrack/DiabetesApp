import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import DatePicker from "../components/DatePicker";
import NextButton from "../components/NextButton";
import { useRouter } from "expo-router";
import { auth, db } from "./auth/firebase";
import { doc, updateDoc } from "firebase/firestore";

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
      router.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/date.png")} style={styles.image} />
      <Text style={styles.headline}>Seleccione su fecha de nacimiento</Text>
      <DatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
      <NextButton onSubmit={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  headline: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default BirthdateScreen;
