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
                <Text style={fontStyle.primaryButtonFont}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={buttonStyles.secondary}
                onPress={() => router.navigate("SignUp")}
            >
                <Text style={fontStyle.secondaryButtonFont}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    )
};

export default WelcomeButtons;