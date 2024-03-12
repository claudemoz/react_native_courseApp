import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NoData = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.noDataText}>{title}</Text>
    </View>
  )
}

export default NoData

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  noDataText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})