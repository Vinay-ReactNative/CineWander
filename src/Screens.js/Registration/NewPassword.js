import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { flex, heightvalue, padding, styles, widthvalue } from '../../Utils/styles'
import BackButton from '../../Components/BackButton'
import { appleImg } from '../../assets/Images'

export const NewPassword = () => {
    return (
        <SafeAreaView style={[flex(1), styles.bgWhite, padding(0, 20, 30)]}>

            <View><BackButton text={'Create New Password'} /></View>
            <View style={[widthvalue(1), { height: '45%' }, styles.allCenter]}>
                <Image source={appleImg} style={[{ width: widthvalue(1), height: heightvalue(2.8) }]} />
            </View>
            <View>
                <Text>Create Your New Password</Text>

            </View>
        </SafeAreaView>
    )
}
