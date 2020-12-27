import { Platform } from 'react-native'

export default {
    text:{
        fontSize:18,
        fontFamily: Platform.OS ==='andriod' ? 'Roboto' : "Avenir"
    }
}