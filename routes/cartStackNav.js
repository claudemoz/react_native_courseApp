import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Cart from '../screens/Cart/Cart';
import COLORS from '../styles/COLORS';
import CustomHeaderIcon from '../components/CustomHeaderIcon';

const Stack = createNativeStackNavigator();

export default function CartNavigator() {
  const navigation = useNavigation()
  const { cartCourses } = useSelector(state => state.cart);
  // console.log(cartCourses);
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: COLORS.green },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: COLORS.white,
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      )
    }}>
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          // headerShown: false,
          title: 'Panier'
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  cart: {

  },
  cartQuantityContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.orange,
    width: 20,
    height: 20,
    borderRadius: 100,
    marginLeft: 30,
    marginBottom: -5
  },
  cartQuantity: {
    color: COLORS.white
  }
})