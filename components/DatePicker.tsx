import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Platform,
  Text,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Colors from "@/constants/Colors";

interface DatePickerProps {
  selectedDate?: Date;
  onDateChange: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onDateChange,
}) => {
  const [show, setShow] = useState(false);

  const onChange = (_event: any, date?: Date) => {
    if (Platform.OS === "android") {
      setShow(false); // Oculta el picker después de seleccionar en Android
    }
    if (date) {
      onDateChange(date);
    }
  };

  return (
    <View style={styles.container}>
      {Platform.OS === "ios" ? (
        <DateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          display="spinner"
          onChange={onChange}
          maximumDate={new Date()}
          style={styles.datePicker}
        />
      ) : (
        <>
          <TouchableOpacity onPress={() => setShow(true)} style={styles.button}>
            <Text style={styles.buttonText}>
              {selectedDate
                ? selectedDate.toLocaleDateString()
                : "Selecciona una fecha"}
            </Text>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              value={selectedDate || new Date()}
              mode="date"
              display="default"
              onChange={onChange}
              maximumDate={new Date()}
            />
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  datePicker: {
    width: "100%",
    height: 200,
  },
  button: {
    padding: 12,
    backgroundColor: Colors.Brand01,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default DatePicker;
