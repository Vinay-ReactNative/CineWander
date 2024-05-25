import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { fontSize, fontWeight, padding, styles, widthvalue } from '../Utils/styles'
import { useNavigation } from '@react-navigation/native'

const BackButton = ({ text }) => {
    const navigation = useNavigation()

    const navigateback = () => {
        navigation.goBack()
    }
    return (
        <TouchableOpacity onPress={navigateback}>
            <View style={[{ width: widthvalue(1), gap: 20 }, styles.row, styles.centerHorizontal,]}>
                <Icon name={'arrowleft'} size={25} />
                <Text style={[fontSize(22), styles.Black, fontWeight(500)]}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BackButton

