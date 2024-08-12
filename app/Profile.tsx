import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { useRouter } from "expo-router";
import FormProfile from "@/components/FormProfile";
import { containerStyles } from "@/constants/Containers";
import { fontStyle } from "@/constants/FontStyles";
import { auth, db } from "./auth/firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { buttonStyles } from "@/constants/Buttons";
import LogOutButton from "@/components/LogOutButton";

const Profile: React.FC = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        setUserData(userDocSnap.data());
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
        <Text style={fontStyle.descriptionFont}>{userData?.gender}</Text>
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
});

export default Profile;
