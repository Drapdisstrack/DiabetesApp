import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface DatePickerProps {
  selectedDate?: Date;
  onDateChange: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onDateChange,
}) => {
  const [show, setShow] = useState(false);

  const handleChange = (event: any, date?: Date) => {
    setShow(true);
    if (date) {
      onDateChange(date);
    }
  };

  return (
    <View style={styles.container}>
      <DateTimePicker
        value={selectedDate || new Date()}
        mode="date"
        display="spinner"
        onChange={handleChange}
        style={styles.datePicker}
      />
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
});

export default DatePicker;
