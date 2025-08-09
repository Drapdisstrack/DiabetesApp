import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../app/auth/firebase";
import Colors from "@/constants/Colors";

interface State {
  key: string; // ID del estado
  value: string; // Nombre del estado
}

interface StatesDropdownProps {
  selectedState: string;
  onStateChange: (state: string) => void;
  editable?: boolean;
}

const StatesDropdown: React.FC<StatesDropdownProps> = ({ selectedState, onStateChange, editable = true }) => {
  const [states, setStates] = useState<State[]>([]);
  const [inputColor, setInputColor] = useState<string>(); // Estado para manejar el color

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "states"));
        const statesArray = querySnapshot.docs.map((doc) => ({
          key: doc.id,
          value: doc.data().name,
        }));
        setStates(statesArray);

        if (!editable) {
          setInputColor(Colors.Monochromatic01); // Cambia el color al inicializar si ya hay un estado seleccionado
        } else {
          setInputColor(Colors.Monochromatic05);
        }
      } catch (error) {
        console.error("❌ Error al obtener los estados:", error);
      }
    };

    fetchStates();
  }, []);

  const handleStateSelect = (key: string) => {
    if (!editable) return; 
    const selectedState = states.find((state) => state.key === key);
    if (selectedState) {
      onStateChange(selectedState.value);
      setInputColor(Colors.Monochromatic01); // Cambia el color cuando se selecciona un estado
    }
  };

  return (
    <TouchableOpacity style={!editable && styles.disabled} disabled={!editable}>
      <View pointerEvents={editable ? "auto" : "none"}>
        <SelectList
          setSelected={handleStateSelect}
          data={states}
          placeholder="Selecciona un estado"
          search={false} 
          boxStyles={styles.dropdown}
          dropdownStyles={styles.dropdownMenu}
          dropdownTextStyles={styles.dropdownText}
          inputStyles={ { color: inputColor, fontSize: 16 }}
          defaultOption={{ key: selectedState, value: selectedState }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 45,
    width: "100%",
    borderColor: Colors.Monochromatic08,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "white",
  },
  dropdownMenu: {
    borderColor: Colors.Monochromatic08,
    borderWidth: 1,
    backgroundColor: "white",
  },
  dropdownText: {
    color: Colors.Monochromatic01,
    fontSize: 16,  
  },
  disabled: {
    opacity: 0.5
  }
});

export default StatesDropdown;
