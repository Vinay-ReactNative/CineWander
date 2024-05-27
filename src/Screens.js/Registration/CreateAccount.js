import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { styles, flex, padding, fontSize, margin, heightvalue, widthvalue, borderRadius, borderwidth, marginPosition, fontWeight } from '../../Utils/styles'
import { LogoComponent } from './Components/LogoComponent'
import BackButton from '../../Components/BackButton'
import { CommonTextInput } from '../../Components/CommonTextInput'
import { IconComponent, Icons } from '../../Components/IconComponent'
import { emailValidation, passwordValidation } from '../../Components/Validations'
import Button from '../../Components/Button'
import { FacebookImg, appleImg, googleImg } from '../../assets/Images'
import { SignIn2 } from './Components/SignIn2'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../Redux/Slicers.js/addAccountSlice'

export const CreateAccount = () => {
    // const user = useSelector(state => state.registerReducer.user)
    // const dispatch = useDispatch();
    // console.log(user)

    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [rememberme, setRememberme] = useState(false)
    console.log('email entered:', email)

    const handleEmail = (email) => {
        setEmail(email)
        if (email.length === 0) {
            setError('')
        }
        else if (!emailValidation(email)) {
            setError('Enter a Valid Email')
        } else if (emailValidation(email)) {
            setError('')
        }
    }

    const handlePassword = (password) => {
        setPassword(password)
        if (password.length === 0) {
            setError('')
        }
        else if (passwordValidation(password)) {
            const pass = passwordValidation(password)
            setError(pass)
        } else {
            setError('')
        }
    }
    // const RegisterUser = () => {
    //     dispatch(setUser(email))
    // }
    return (
        <ScrollView keyboardShouldPersistTaps={'handled'} contentContainerStyle={[{ minHeight: '100%' }, padding(0, 35, 30), styles.bgWhite, styles.spaceAround]}>
            <View>
                <BackButton />
            </View>
            <View style={[]}>
                <LogoComponent text={'Create your Account'} />
            </View>
            <View>
                <View style={[padding(0, 0, 15), { gap: 30 }]}>
                    <CommonTextInput placeholderTextColor={'gray'} placeholder={'Email'} name={'mail'} type={Icons.Entypo} style={[styles.Red, fontSize(22)]}
                        onChangeText={handleEmail}
                        value={email} />
                    <CommonTextInput placeholderTextColor={'gray'} placeholder={'Password'} name={'lock'} type={Icons.Entypo} style={[styles.Red, fontSize(22)]} secureTextEntry={showPassword} name2={showPassword ? 'eye-with-line' : 'eye'} type2={Icons.Entypo} onPress={() => setShowPassword(!showPassword)} onChangeText={(password) => handlePassword(password)} value={password} onBlur={() => setError('')} />
                </View>
                <Text style={[margin(0, 0, 8), styles.Red, { textAlign: 'center' }]}>{error}</Text>

                <View style={[styles.row, styles.allCenter, { gap: 10 }]}>
                    <TouchableOpacity onPress={() => setRememberme(!rememberme)}>
                        <IconComponent name={rememberme ? 'check-square' : 'square'} type={Icons.Feather} style={[styles.activeRed, fontSize(20)]} />
                    </TouchableOpacity>
                    <Text>Remember Me</Text>
                </View>
                <View style={[margin(0, 0, 20)]}>
                    <Button text={'Sign Up'} disabled={false} />
                </View>
            </View>
            <View style={[styles.row, styles.allCenter, marginPosition(0, 0, 10, 0)]}>

                <View style={[heightvalue(10), widthvalue(1), { backgroundColor: 'red' }]}></View>
                <Text style={{ color: '#00000080' }}>or Continue with</Text>
                <View style={[heightvalue(10), widthvalue(10), styles.bgDimwhite]}></View>
            </View>
            <View style={[styles.row, styles.spaceEvenly, margin(0, 0, 20)]}>
                <SignIn2 imgname={googleImg} />
                <SignIn2 imgname={FacebookImg} />
                <SignIn2 imgname={appleImg} />
            </View>
            <View style={[styles.row, styles.allCenter, { gap: 5 }, margin(0, 0, 10)]}>
                <Text style={[fontSize(16), styles.allCenter, styles.Black]}>Already have an account ?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')} >
                    <Text style={[fontSize(16), styles.allCenter, styles.Red, fontWeight(500)]}>Sign In</Text>
                </TouchableOpacity>
            </View>

        </ScrollView >
    )
}
