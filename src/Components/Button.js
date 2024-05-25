import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { widthvalue, styles, padding, borderRadius, fontSize, fontWeight } from '../Utils/styles'

const Button = ({ text, disabled, onPress }) => {
    return (
        <TouchableOpacity style={[disabled ? styles.bgDisabled : styles.bgEnable, padding(0, 0, 14), styles.centerHorizontal, borderRadius(60), widthvalue(1)]} onPress={onPress}>
            <Text style={[styles.White, fontSize(18), fontWeight(500)]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button
