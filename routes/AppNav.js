import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Drawer from './Drawer'

const AppNav = () => {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  )
}

export default AppNav

const styles = StyleSheet.create({})