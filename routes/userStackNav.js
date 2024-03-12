import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import UserCourses from '../screens/UserCourses/UserCourses';
import UserEditCourse from '../screens/UserEditCourse/UserEditCourse';
import COLORS from '../styles/COLORS';
import CustomHeaderIcon from '../components/CustomHeaderIcon';

const Stack = createNativeStackNavigator();

export default function UserNavigator() {
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

    }}>

      <Stack.Screen
        name="Cart"
        component={UserCourses}
        options={{
          title: 'Mes cours',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
              <Item
                title="menu"
                iconName="menu"
                onPress={() => navigation.openDrawer()}
              />
            </HeaderButtons>
          ),
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
              <Item
                title="Editer"
                iconName="library-add"
                onPress={() => navigation.navigate("Edit", {
                  title: 'Créer un cours',
                })}
              />
            </HeaderButtons>
          )
        }}
      />
      <Stack.Screen
        name="Edit"
        component={UserEditCourse}
        options={({ route }) => ({
          headerTitleAlign: 'center',
          title: route.params?.title ? route.params?.title : 'Editer le cours'
        })}
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