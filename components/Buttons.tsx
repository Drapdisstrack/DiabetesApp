import { fontStyle } from "@/constants/FontStyles";
import { buttonStyles } from "@/constants/Buttons";
import { iconStyles } from "@/constants/Icons";
import { View, TouchableOpacity, Text, Image,} from "react-native";
import { containerStyles } from "@/constants/Containers";


const Buttons: React.FC = () => {

    return (
        <View style={containerStyles.buttonsContainer}>
            <TouchableOpacity style={buttonStyles.tertiary}>
            <Image source={require("../assets/images/google.png")} style={iconStyles.buttonIcon} />
                <View style={containerStyles.textContainer}>
                    <Text style={fontStyle.textFieldFont}>Registrate con Google</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={buttonStyles.tertiary}>
            <Image source={require("../assets/images/facebook.png")} style={iconStyles.buttonIcon} />
                <View style={containerStyles.textContainer}>
                    <Text style={fontStyle.textFieldFont}>Registrate con Facebook</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default Buttons;