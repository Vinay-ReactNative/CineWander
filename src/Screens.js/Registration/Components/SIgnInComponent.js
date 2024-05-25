import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import EIcon from 'react-native-vector-icons/Entypo'
import FacebookIcon from '../../../assets/facebook.svg'
import { FacebookImg, googleImg } from '../../../assets/Images'
import { borderRadius, borderwidth, fontSize, fontWeight, heightvalue, margin, padding, paddingPosition, styles, widthvalue } from '../../../Utils/styles'

const SIgnInComponent = ({ imgSource, text, imgstyle }) => {
    return (
        <TouchableOpacity onPress={() => console.log('hi')}>
            <View style={[styles.row, borderRadius(16), widthvalue(2), styles.allCenter, { borderColor: 'lightgray' }, borderwidth(1), margin(0, 8), padding(0, 0, 13), { gap: 20 },]}>
                <Image source={imgSource} style={imgstyle} />
                <Text style={[fontSize(16), fontWeight(700), styles.Black]}>{text}</Text>
            </View>
        </TouchableOpacity>

    )

}

export default SIgnInComponent