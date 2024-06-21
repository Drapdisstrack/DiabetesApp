import {StyleSheet} from 'react-native'
import Colors from './Colors'

export const buttonStyles= StyleSheet.create ({
    primary:{
        alignItems: 'center',
        width: '85%',
        borderRadius: 20,
        backgroundColor: Colors.Brand01,
        textAlign: "center",
        paddingVertical: 15,
        marginBottom: 20,
        justifyContent: 'center',
        shadowColor: Colors.Shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    secondary:{
        alignItems: 'center', 
        width: '85%',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: Colors.Brand01,
        backgroundColor: Colors.FontWhite,
        paddingVertical: 15,
        marginBottom: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        shadowColor: Colors.Shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    tertiary:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.Monochromatic10,
        borderColor: Colors.Monochromatic06,
        borderWidth: 1,
        borderRadius: 20,
        width: '85%',
        paddingVertical: 15,
        marginBottom: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    error: {
        alignItems: 'center',
        width: '85%',
        borderRadius: 20,
        backgroundColor: Colors.Error,
        textAlign: "center",
        paddingVertical: 15,
        marginBottom: 10,
        justifyContent: 'center',
        shadowColor: Colors.Shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    success: {
        alignItems: 'center',
        width: '85%',
        borderRadius: 20,
        backgroundColor: Colors.Success,
        textAlign: "center",
        paddingVertical: 15,
        marginBottom: 10,
        justifyContent: 'center',
        shadowColor: Colors.Shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    disable: {
        alignItems: 'center',
        width: '85%',
        borderRadius: 20,
        backgroundColor: Colors.Monochromatic08,
        textAlign: "center",
        paddingVertical: 15,
        marginBottom: 10,
        justifyContent: 'center',
        shadowColor: Colors.Shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    toggleButton: {
        position: 'absolute',
        right: 0,
        bottom: 18,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    quizzOption:{
        alignItems: 'center',
        width: '85%',
        height: 58,
        borderRadius: 20,
        backgroundColor: Colors.Monochromatic10,
        textAlign: "center",
        paddingVertical: 15,
        marginBottom: 25,
        justifyContent: 'center',
        shadowColor: Colors.Shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
})