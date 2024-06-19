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
    },
    comencemosFont:{                  //es la letra del comencemos, solo se usa 1 vez xd
        ...typography.h2,
        color: Colors.FontDark,
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
    },
    textFieldFont:{
        ...typography.ps,
        color: Colors.FontDark,
    },
    haveAccountText:{
        ...typography.ps2,
        color: Colors.Monochromatic05,
    },
    haveAccount2Text:{
        ...typography.ps2,
        color: Colors.Monochromatic02,
    },
})
