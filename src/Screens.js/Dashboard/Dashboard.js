import { View, Text, SafeAreaView, ImageBackground, ScrollView, Image } from 'react-native'
import React from 'react'
import { FacebookImg, Logo } from '../../assets/Images'
import { flex, heightvalue, styles, widthvalue } from '../../Utils/styles'

export const Dashboard = () => {
    return (
        <SafeAreaView style={[{ flex: 1 }]}>
            <ScrollView contentContainerStyle={[{ flexGrow: 1 }]} showsVerticalScrollIndicator>
                <ImageBackground source={FacebookImg} style={[styles.bgBlack, { width: 200 }, { height: '50%' }]}>
                </ImageBackground>
                <ImageBackground source={FacebookImg} style={[styles.bgBlack, { width: 200 }, { height: '50%' }]}>
                </ImageBackground>
                <ImageBackground source={FacebookImg} style={[styles.bgBlack, { width: 200 }, { height: '50%' }]}>
                </ImageBackground>
                <ImageBackground source={FacebookImg} style={[styles.bgBlack, { width: 200 }, { height: '50%' }]}>
                </ImageBackground>
                <ImageBackground source={FacebookImg} style={[styles.bgBlack, { width: 200 }, { height: '50%' }]}>
                </ImageBackground>
                <ImageBackground source={FacebookImg} style={[styles.bgBlack, { width: 200 }, { height: '50%' }]}>
                </ImageBackground>
                <ImageBackground source={FacebookImg} style={[styles.bgBlack, { width: 200 }, { height: '50%' }]}>
                </ImageBackground>
                <ImageBackground source={FacebookImg} style={[styles.bgBlack, { width: 200 }, { height: '50%' }]}>
                </ImageBackground>
                <View style={[styles.bgDimred]}>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
