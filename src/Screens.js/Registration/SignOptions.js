import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import SIgnInComponent from './Components/SIgnInComponent'
import { FacebookImg, appleImg, googleImg } from '../../assets/Images'
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import Button from '../../Components/Button'
import { buttonbg } from '../../Utils/Colors'
import BackButton from '../../Components/BackButton'
import { flex, fontSize, fontWeight, heightvalue, margin, marginPosition, padding, styles, widthvalue } from '../../Utils/styles'


const SignOptions = ({ navigation }) => {
    return (
        <View style={[flex(1), padding(0, 30, 30), styles.bgWhite, styles.spaceBetween,]}>
            <View style={[]}>
                <BackButton />
            </View>
            <View style={[styles.allCenter,]}>
                <Image source={googleImg} style={[{ width: widthvalue(1.8), height: widthvalue(1.8) }, marginPosition(-20, 0, 10, 0)]} />
                <Text style={[fontSize(40), styles.Black, fontWeight(700), margin(0, 30)]}>Let's You In</Text>
            </View>
            <View style={[{ gap: 20 }]}>
                <SIgnInComponent text={'Connect with facebook'} imgSource={FacebookImg} imgstyle={[{ width: widthvalue(20), height: widthvalue(20) }]} />
                <SIgnInComponent text={'Connect with Google'} imgSource={googleImg} imgstyle={[{ width: widthvalue(20), height: widthvalue(20) }]} />
                <SIgnInComponent text={'Connect with Apple'} imgSource={appleImg} imgstyle={[{ width: widthvalue(18), height: widthvalue(18) }]} />
                <View style={[styles.row, styles.allCenter]}>

                    <View style={[heightvalue(3),]}></View>
                    <Text style={{ color: '#00000080' }}>or</Text>
                    <View style={[heightvalue(10), styles.bgDimwhite]}></View>
                </View>
                <Button text={'Sign In with Password'} onPress={() => navigation.navigate('Login')} />
                <View style={[styles.row, styles.allCenter, { gap: 5 }]}>
                    <Text style={[fontSize(16), styles.allCenter, styles.Black]}>Dont' have an account ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')} >
                        <Text style={[fontSize(16), styles.allCenter, styles.Red, fontWeight(500)]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SignOptions

