import { View, Text, TextInput, ScrollView, } from 'react-native'
import React, { useRef, useState } from 'react'
import { borderwidth, heightvalue, styles, widthvalue, borderRadius, padding, fontSize, flex, marginPosition } from '../Utils/styles'
import { TouchableOpacity } from 'react-native'
import { IconComponent } from './IconComponent'

export const CommonTextInput = ({ onChangeText, value, placeholder, secureTextEntry, multiline, ref, keyboardType, type, name, name2, type2, onPress }) => {
  const [active, setActive] = useState(false)
  const onBlurFunc = () => {
    setActive(false)
  }
  // const [showIcon,setShowIcon] = useState(false)
  return (
    <ScrollView keyboardShouldPersistTaps={'handled'} contentContainerStyle={[widthvalue(1), active ? styles.borderRed : styles.borderDimwhite, active ? styles.bgDimred : { backgroundColor: '#fcfcfc' }, heightvalue(7), borderwidth(active ? .8 : .3), borderRadius(8), padding(0, 10, 0), fontSize(16), styles.row, styles.centerHorizontal,
    ]}>


      <View>
        <IconComponent name={name} style={[active ? styles.Red : styles.IconGray, marginPosition(0, 10), fontSize(20)]} type={type} />
      </View>

      <TextInput
        onChangeText={onChangeText}
        onFocus={() => setActive(true)}
        onBlur={() => { setActive(false) }}
        value={value}
        ref={ref}
        style={[{ width: widthvalue(1.55) }]}
        placeholder={placeholder}
        placeholderTextColor={styles.IconGray}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        keyboardType={keyboardType}
      />
      <View>
        <TouchableOpacity onPress={onPress}>
          <IconComponent name={name2} style={[active ? styles.Red : styles.IconGray, marginPosition(0, 10), fontSize(20)]} type={type2} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
