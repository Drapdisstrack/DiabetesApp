import {StyleSheet} from 'react-native'

export const containerStyles= StyleSheet.create ({
    textContainer: {
        flex: 1,
        alignItems: 'center',
    },
    container: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
})