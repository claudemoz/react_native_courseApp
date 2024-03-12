import { StyleSheet, Text, View } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../styles/COLORS';

const CustomHeaderIcon = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={MaterialIcons}
      iconSize={23}
      color={COLORS.white}
    />
  )
}

export default CustomHeaderIcon

const styles = StyleSheet.create({})