import { fontStyle } from "@/constants/FontStyles";
import { buttonStyles } from "@/constants/Buttons";
import { iconStyles } from "@/constants/Icons";
import { View, TouchableOpacity, Text} from "react-native";
import { containerStyles } from "@/constants/Containers";
import { useRouter } from "expo-router";


const WelcomeButtons: React.FC = () => {
    const router = useRouter();

    return (
        <View style={containerStyles.buttonsContainer}>
            <TouchableOpacity 
                style={buttonStyles.primary} 
                onPress={() => router.navigate("SignIn")}
            >
                <View style={containerStyles.textContainer}>
                    <Text style={fontStyle.primaryButtonFont}>Iniciar Sesión</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
                style={buttonStyles.secondary}
                onPress={() => router.navigate("SignUp")}
            >
                <View style={containerStyles.textContainer}>
                    <Text style={fontStyle.secondaryButtonFont}>Registrarse</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default WelcomeButtons;