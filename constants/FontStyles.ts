import {StyleSheet} from 'react-native'
import {typography} from './Typograhpy'
import Colors from './Colors'

export const fontStyle= StyleSheet.create ({
    primaryButtonFont:{
        ...typography.h4,
        color: Colors.FontWhite,
        
    },
    secondaryButtonFont:{
        ...typography.h4,
        color: Colors.Brand01,
    },
    appNameFont:{
        ...typography.h1,
        color: Colors.Brand01,
        marginBottom: 20
    },
    comencemosFont:{                  //es la letra del comencemos, solo se usa 1 vez xd
        ...typography.h2,
        color: Colors.FontDark,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    descriptionFont:{
        ...typography.h3,
        color: Colors.Monochromatic05,
        marginBottom: 30,
        textAlign:"center",
    },
    grayTextFont:{           
        ...typography.h3,
        color: Colors.Monochromatic05,
    },
    blackTextFont:{
        ...typography.h3,
        color: Colors.FontDark,
    },
    headlineFont:{
        ...typography.h12,
        color: Colors.FontDark,
        marginBottom: 20,
    },
    textFieldFont:{
        ...typography.ps,
        color: Colors.FontDark,
    },
    haveAccountText:{
        marginTop: 20,
        ...typography.ps2,
        color: Colors.Monochromatic05,
    },
    haveAccount2Text:{
        ...typography.ps2,
        color: Colors.Brand01,
        fontWeight: 'bold',
    },
    textInput: {
        width: '85%',
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft: 15,
        marginVertical: 10,
        marginBottom: 5,
        backgroundColor: Colors.FontWhite,
      },
})
