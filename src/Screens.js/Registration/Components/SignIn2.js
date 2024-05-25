import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { borderRadius, borderwidth, padding, widthvalue } from '../../../Utils/styles'
import { googleImg } from '../../../assets/Images'

export const SignIn2 = ({ imgname }) => {
    return (
        <TouchableOpacity>
            <View style={[borderwidth(.2), borderRadius(8), padding(20)]}>
                <Image source={imgname} style={[{ width: widthvalue(20), height: widthvalue(20) },]} />
            </View>
        </TouchableOpacity>
    )
}
