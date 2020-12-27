import React from 'react'
import { Text } from 'react-native'

import defaults from '../config/Font'

export default function AppText ({ children, style }){
    return(
        <Text style={[defaults.text.fontFamily,style]}>
            {children}
        </Text>
    )
}