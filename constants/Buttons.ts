import {StyleSheet} from 'react-native'
import Colors from './Colors'

export const buttonStyle= StyleSheet.create ({
    primary:{
        width: 327,
        height: 58,
        borderRadius: 20,
        backgroundColor: Colors.Brand01,
        textAlign: "center",

    },
    secondary:{
        width: 327,
        height: 58,
        borderRadius: 20,
        backgroundColor: Colors.Error,
        textAlign: "center",
    },
    tertiary:{
        width: 327,
        height: 58,
        borderRadius: 20,
        borderColor: Colors.Monochromatic06,
        borderWidth:1,
        borderStyle:"solid",
        color: Colors.Monochromatic10,
        textAlign: "center",
        display:"flex",
        justifyContent:"center",
        gap:16,
    },
    error: {
        width: 327,
        height: 58,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: Colors.Error,
        textAlign: "center",
        shadowColor: Colors.Shadow,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
    },
    success: {
        width: 327,
        height: 58,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: Colors.Success,
        textAlign: "center",
        shadowColor: Colors.Shadow,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
    },
    disable: {
        width: 327,
        height: 58,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: Colors.Monochromatic08,
        textAlign: "center",
        shadowColor: Colors.Shadow,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
    },

})