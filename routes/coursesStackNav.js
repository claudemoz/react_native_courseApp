import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Landing from '../screens/Landing/Landing';
import CoursesInfos from '../screens/CoursesInfos/CoursesInfos';
import Cart from '../screens/Cart/Cart';
import COLORS from '../styles/COLORS';
import CustomHeaderIcon from '../components/CustomHeaderIcon';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function CourseNavigator() {
  const navigation = useNavigation()
  const { cartCourses } = useSelector(state => state.cart);
  // console.log(cartCourses);
  return (
    <Stack.Navigator screenOptions={{
      // headerShown: false,
      headerStyle: { backgroundColor: COLORS.green },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: COLORS.white,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
          <View style={styles.cart} >
            {
              cartCourses.length > 0 && (
                <View style={styles.cartQuantityContainer}>
                  <Text style={styles.cartQuantity}>{cartCourses.length}</Text>
                </View>)
            }
            <Item
              title="shopping-cart"
              iconName="shopping-cart"
              onPress={() => navigation.navigate('Cart')}
            />
          </View>
        </HeaderButtons>
      ),
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
        name="Landing"
        component={Landing}
        options={{
          // headerShown: false,
          title: 'Home'
        }}
      />
      <Stack.Screen name="Details" component={CoursesInfos} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator >
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