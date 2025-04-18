import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Platform } from "react-native";
import { Avatar, ProgressBar, TextInput } from "react-native-paper";
import { useRouter } from "expo-router";
import { containerStyles } from "@/constants/Containers";
import { fontStyle } from "@/constants/FontStyles";
import { auth, db } from "./auth/firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { buttonStyles } from "@/constants/Buttons";
import LogOutButton from "@/components/LogOutButton";
import Colors from "@/constants/Colors";
import StatesDropdown from "@/components/StatesDropdown";
import DateTimePicker from "@react-native-community/datetimepicker";

const Profile: React.FC = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);
  const [editable, setEditable] = useState(false);
  const [experience, setExperience] = useState(0);
  const [level, setLevel] = useState(1);
  const [limit, setLimit] = useState<number>(100);
  const [progress, setProgress] = useState(0);

  // Estados para los inputs
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [state, setState] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        const data = userDocSnap.data();
        setUserData(data);
        setExperience(data.exp);
        setLevel(data.level);

        const limit = 100 * Math.pow(data.level, 2);
        setLimit(limit);
        setProgress(data.exp / limit);

        // Cargar valores en los inputs
        setName(data.name || "");
        setSurname(data.surname || "");
        setState(data.state || "");
        setBirthdate(data.birthdate || "");

        // Convertir birthdate en string a Date (si existe)
        if (data.birthdate) {
          const parts = data.birthdate.split("-");
          const localDate = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
          setSelectedDate(localDate);
        }        
      }
    }
  };

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSaveChanges = async () => {
    if (!name.trim() || !surname.trim() || !state.trim() || !birthdate.trim()) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }

    if (name.length > 100 || surname.length > 100 || state.length > 100 || birthdate.length > 100) {
      Alert.alert("Error", "Cada campo debe tener menos de 100 caracteres.");
      return;
    }

    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      await updateDoc(userDocRef, {
        name,
        surname,
        state,
        birthdate,
      });
      fetchUserData();
      setEditable(false);
    }
  };

  const handleLogOut = () => {
    router.navigate("./SignIn");
  };

  return (
    <View style={containerStyles.container}>
      <Avatar.Image size={150} source={require("../assets/images/profile.png")} />
      <View style={styles.textContainer}>
        <Text style={fontStyle.headlineFont}>{userData?.name}</Text>
      </View>
      <View>
        <Text style={styles.level}>Nivel {level}</Text>
        <View style={styles.experienceContainer}>
          <Text style={styles.level}>{experience}</Text>
          <View style={styles.progressBarContainer}>
            <ProgressBar progress={progress} color={Colors.Error} style={styles.progressBar} />
          </View>
          <Text style={styles.level}>{limit}</Text>
        </View>
      </View>

      {/* Formulario de Edición */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={[!editable && styles.disabled, styles.input]}
          value={name}
          onChangeText={setName}
          editable={editable}
          underlineColor= 'transparent'
        />
        <Text style={styles.label}>Apellido Paterno</Text>
        <TextInput
          style={[!editable && styles.disabled, styles.input]}
          value={surname}
          onChangeText={setSurname}
          editable={editable}
          underlineColor= 'transparent'
        />
        <Text style={styles.label}>Estado</Text>
        <StatesDropdown 
          selectedState={state} 
          onStateChange={setState} 
          editable={editable}
        />
        <Text style={styles.label}>Fecha de nacimiento</Text>

        <TouchableOpacity
          activeOpacity={editable ? 0.7 : 1}
          disabled={!editable}
          onPress={() => {            
            setShowDatePicker(true);
          }}
        >
          <TextInput
            style={[!editable && styles.disabled, styles.input]}
            value={birthdate}
            editable={false}
            pointerEvents="none"
            underlineColor="transparent"
          />
        </TouchableOpacity>

        {/* DateTimePicker para ambas plataformas */}
        {showDatePicker && Platform.OS === 'android' && (
          <DateTimePicker
            value={selectedDate || new Date()}
            mode="date"
            display="default"
            onChange={(event, date) => {
              setShowDatePicker(false); // Cierra el modal automáticamente
              if (date) {
                setSelectedDate(date);
                setBirthdate(date.toISOString().split("T")[0]);
              }
            }}
            maximumDate={new Date()}
          />
        )}

        {showDatePicker && Platform.OS === 'ios' && (
          <View style={{ marginTop: 10 }}>
            <DateTimePicker
              value={selectedDate || new Date()}
              mode="date"
              display="spinner"
              onChange={(_event, date) => {
                if (date) {
                  setSelectedDate(date);
                }
              }}
              maximumDate={new Date()}
              style={{ backgroundColor: 'white' }}
            />
            {/* Botones para Guardar y Cancelar fecha */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <TouchableOpacity
                style={[buttonStyles.success, { flex: 1, marginRight: 5 }]}
                onPress={() => {
                  if (selectedDate) {
                    setBirthdate(selectedDate.toISOString().split("T")[0]);
                  }
                  setShowDatePicker(false);
                }}
              >
                <Text style={fontStyle.primaryButtonFont}>Guardar Fecha</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[buttonStyles.error, { flex: 1, marginLeft: 5 }]}
                onPress={() => {
                  setShowDatePicker(false);
                }}
              >
                <Text style={fontStyle.primaryButtonFont}>Cancelar Fecha</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

      </View>

      {!editable ? (
        <TouchableOpacity style={[buttonStyles.error, { marginTop: 20 }]} onPress={handleEdit}>
          <Text style={fontStyle.primaryButtonFont}>Editar Perfil</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={[buttonStyles.success, { marginTop: 20 }]} onPress={handleSaveChanges}>
          <Text style={fontStyle.primaryButtonFont}>Guardar Cambios</Text>
        </TouchableOpacity>
      )}

      <LogOutButton onLogOut={handleLogOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 20,
  },
  disabled: {
    opacity: 0.5 
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20,
    backgroundColor: Colors.FontWhite,
    
  },
  label: {
    color: Colors.Monochromatic01,
    fontSize: 14,
    marginBottom: 2,
    marginTop: 10
  },
  experienceContainer: {
    marginHorizontal: 24,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  level: {
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 24,
  },
  progressBarContainer: {
    width: "70%",
    justifyContent: "center",
  },
  progressBar: {
    height: 10,
    borderRadius: 25,
  },
  formContainer: {
    width: "85%",
  },
  marginBottom: {
    marginBottom: 10
  }
});

export default Profile;
