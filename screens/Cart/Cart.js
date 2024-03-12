import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import NoData from '../../components/NoData';
import CourseInCart from './components/CourseInCart';
import STYLES from '../../styles/STYLES';
import COLORS from '../../styles/COLORS';
import CustomButton from '../../components/CustomButton';
import { addPayment } from '../../redux/actions/paymentActions';

const Cart = () => {
  const { cartCourses } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const totalPrice = cartCourses.reduce((acc, course) => {
    return acc + course.price * course.quantity
  }, 0);

  return (
    <View style={styles.container}>
      <View>
        {
          cartCourses?.length
            ? <FlatList
              showsVerticalScrollIndicator={false}
              data={cartCourses}
              renderItem={({ item }) => (
                <CourseInCart key={item.id} course={item} />)
              }
              keyExtractor={item => item.id}
            />
            : <NoData title="Votre panier est vide !" />
        }
      </View>
      <View style={[styles.wrapperTotalPrice]}>
        <Text style={styles.titleTotal}>TOTAL: <Text style={styles.totalPrice}>{totalPrice.toFixed(2)} €</Text></Text>
        <CustomButton
          style={styles.bgButton}
          title="Valider le panier"
          action={() => dispatch(addPayment(cartCourses, totalPrice))}
        />
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  wrapperTotalPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30
  },
  titleTotal: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  totalPrice: {
    color: COLORS.green
  },
  bgButton: {
    backgroundColor: COLORS.orange
  }
})