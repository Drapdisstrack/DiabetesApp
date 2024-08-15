import {StyleSheet} from 'react-native'
import Colors from './Colors'

export const containerStyles= StyleSheet.create ({
    textContainer: {
        flex: 1,
        alignItems: 'center',
    },
    buttonsContainer: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    simpleContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Background
    },
    questionContainer1: {
        flexDirection: 'row',  // Coloca los elementos en una fila
        justifyContent: 'center',  // Centra horizontalmente el contenido
        alignItems: 'center',  // Alinea verticalmente el texto y el botón
        marginTop: 15,  // Espacio superior para separar del contenido anterior
    },
    image: {
        width: 175,
        height: 175,
        marginTop: 50,
    },
    imageRegister: {
        width: 130,
        height: 130,
        marginTop: 50,
    },
    levelCompletedImage: {
        width: 412,
        height: 469,
        marginBottom: 50,
    },
    formContainer: {
        width: '100%',
        alignItems: 'center',
    },
    passwordContainer: {
        width: '85%',
        position: 'relative',
    },
    questionContainer: {
        backgroundColor: Colors.Brand01,
        borderRadius: 20,
        padding: 16,
        marginBottom: 24,
        width: 357,
        height: 176,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlignVertical: "center",
    },
    optionsContainer: {
        display: "flex",
        width: 380,
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
    }, 
    trophyImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        top: -80, 
    },
    starImage: {
        width: 180,
        height: 90,
        marginHorizontal: 5,
    },
    blueTopContainer: {
        width: '85%',
        backgroundColor: Colors.Brand02, 
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    whiteBottomContainer: {
        width: '85%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: Colors.Monochromatic10, 
        padding: 15,
        alignItems: 'center',
    },
    popupContainer:{
        width: '85%',
        borderRadius: 20,
        backgroundColor: Colors.Monochromatic10, 
        padding: 15,
        alignItems: 'center',
    }
})