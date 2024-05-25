import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { flex, margin, marginPosition, styles, widthvalue } from '../../Utils/styles'
import { Logo, loadingLottie } from '../../assets/Images'
import LottieView from 'lottie-react-native'

export const Splash = ({ navigation }) => {

    const darkmode = false;
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('SignOptions')
        }, 3000)
    }, [])
    return (
        <View style={[darkmode ? styles.bgdarkmode : styles.bgWhite, flex(1), styles.allCenter]}>
            <Image source={Logo} style={[{ width: widthvalue(2.2), height: widthvalue(2.2) }, margin(0, 10, 40),]} />
            <LottieView source={loadingLottie} autoPlay style={[{ width: widthvalue(3), height: widthvalue(3) }, marginPosition(40, 0, 0), styles.flexEnd]} />
        </View>
    )
}
