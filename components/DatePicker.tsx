// src/components/DatePicker.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { containerStyles } from "@/constants/Containers";
import { fontStyle } from "@/constants/FontStyles";
import { buttonStyles } from "@/constants/Buttons";

interface DatePickerProps {
  day: string;
  month: string;
  year: string;
  onChange: (field: string, value: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ day, month, year, onChange }) => {
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const years = Array.from({ length: 100 }, (_, i) => (new Date().getFullYear() - i).toString());

  return (
    <View style={containerStyles.formContainer}>
      <Picker
        selectedValue={day}
        style={buttonStyles.quizzOption}
        onValueChange={(value) => onChange("day", value)}
      >
        <Picker.Item label="Día" value="" />
        {days.map((day) => (
          <Picker.Item key={day} label={day} value={day} />
        ))}
      </Picker>
      <Picker
        selectedValue={month}
        style={buttonStyles.quizzOption}
        onValueChange={(value) => onChange("month", value)}
      >
        <Picker.Item label="Mes" value="" />
        {months.map((month) => (
          <Picker.Item key={month} label={month} value={month} />
        ))}
      </Picker>
      <Picker
        selectedValue={year}
        style={buttonStyles.quizzOption}
        onValueChange={(value) => onChange("year", value)}
      >
        <Picker.Item label="Año" value="" />
        {years.map((year) => (
          <Picker.Item key={year} label={year} value={year}  />
        ))}
      </Picker>
    </View>
  );
};


export default DatePicker;
