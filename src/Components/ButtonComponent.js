import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export const ButtonComponent = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Text>Submit</Text>
    </TouchableOpacity>
  )
}
