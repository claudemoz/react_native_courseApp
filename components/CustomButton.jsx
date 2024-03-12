import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, action, style, styleTitle }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, ...style }}
      onPress={action}
    >
      <Text style={{ ...styles.btnTitle, ...styleTitle }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0097e6',
    paddingVertical: 10,
    width: '45%',
    borderRadius: 5,
  },
  btnTitle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600'
  },
})