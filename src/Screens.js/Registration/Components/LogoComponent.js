import { View, Text, Image } from 'react-native'
import React from 'react'
import { Logo } from '../../../assets/Images'
import { borderwidth, flex, fontSize, fontWeight, heightvalue, margin, marginPosition, padding, styles, widthvalue } from '../../../Utils/styles'

export const LogoComponent = ({ text }) => {
    return (
        <View style={[styles.allCenter]}>
            <View style={[styles.allCenter,]}>
                <Image source={Logo} style={[{ width: widthvalue(2), height: widthvalue(2) }, marginPosition(-10, 0, 10, 0),]} />
                <Text style={[fontSize(30), styles.Black, fontWeight(500), marginPosition(-15)]}>{text}</Text>
            </View>
        </View>
    )
}
