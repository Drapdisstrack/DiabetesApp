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
    image: {
        width: 175,
        height: 175,
        marginBottom: 15,
    },
    formContainer: {
        width: '100%',
        alignItems: 'center',
    },
    passwordContainer: {
        width: '85%',
        position: 'relative',
        marginBottom: 20
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
        backgroundColor: '#FFFFFF', 
        padding: 15,
        alignItems: 'center',
    },
})