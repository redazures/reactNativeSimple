import React from 'react'
import { Text } from 'react-native'

import defaults from '../config/Font'

export default function AppText ({ children, style, ...otherProps }){
    return(
        <Text style={ [ defaults.text.fontFamily, style ]} {...otherProps} >
            { children }
        </Text>
    )
}