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
      
})