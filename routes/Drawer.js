import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import CartNavigator from './cartStackNav';
import PaymentNavigator from './paymentStackNav';
import CourseNavigator from './coursesStackNav';
import UserNavigator from './userStackNav';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Drawer.Screen
        name="Home"
        component={CourseNavigator}
        options={{
          title: 'Catalogue',
          drawerIcon: () => <MaterialIcons name="menu-book" size={24} color="black" />
        }} />
      <Drawer.Screen
        name="Panier"
        component={CartNavigator}
        options={{
          title: 'Panier',
          drawerIcon: () => <MaterialIcons name="shopping-cart" size={24} color="black" />
        }} />
      <Drawer.Screen
        name="Achats"
        component={PaymentNavigator}
        options={{
          title: 'Achats',
          drawerIcon: () => <MaterialIcons name="credit-card" size={24} color="black" />
        }} />
      <Drawer.Screen
        name="My courses"
        component={UserNavigator}
        options={{
          title: 'Mes cours',
          drawerIcon: () => <MaterialIcons name="mic" size={24} color="black" />
        }} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator

const styles = StyleSheet.create({})