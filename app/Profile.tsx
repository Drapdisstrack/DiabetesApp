import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, ProgressBar } from "react-native-paper";
import { useRouter } from "expo-router";
import FormProfile from "@/components/FormProfile";
import { containerStyles } from "@/constants/Containers";
import { fontStyle } from "@/constants/FontStyles";
import { auth, db } from "./auth/firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { buttonStyles } from "@/constants/Buttons";
import LogOutButton from "@/components/LogOutButton";
import { typography } from "@/constants/Typograhpy";
import Colors from "@/constants/Colors";

const Profile: React.FC = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);
  const [editable, setEditable] = useState(false);
  const [experience, setExperience] = useState(0);
  const [level, setLevel] = useState(1);
  const [limit, setLimit] = useState<number>(100);
  const [progress, setProgress] = useState(0);

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
        setProgress(data.exp/limit);
      }
    }
  };

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSaveChanges = async (updatedData: any) => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      await updateDoc(userDocRef, updatedData);
      fetchUserData();
      setEditable(false);
    }
  };

  const handleLogOut = () => {
    router.navigate("SignIn");
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
            <ProgressBar progress={progress} color={Colors.Error} style={styles.progressBar}/>
          </View>
          <Text style={styles.level}>{limit}</Text>
        </View>
      </View>
      <FormProfile
        showNameInput={false}
        onSubmit={handleSaveChanges}
        editable={editable}
        userData={userData}
      />
      {!editable && (
        <TouchableOpacity style={[buttonStyles.error, { marginTop: 20 }]} onPress={handleEdit}>
          <Text style={fontStyle.primaryButtonFont}>Editar Perfil</Text>
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
  experienceContainer: {
    marginHorizontal: 24,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  level: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign:"center",
    lineHeight: 24,
  },
  progressBarContainer: {
    width: "70%",
    justifyContent: 'center',
  },
  progressBar: {
    height: 10,
    borderRadius: 25
  }
});

export default Profile;
