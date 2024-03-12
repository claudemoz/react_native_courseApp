import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import NoData from '../../components/NoData';
import PaidItem from './components/PaidItem';

const Payments = () => {
  const { paymentCourses } = useSelector((state) => state.payment);
  console.log("paymentCourses  xxx", paymentCourses);
  return (
    <>
      {
        paymentCourses?.length
          ? <FlatList
            showsVerticalScrollIndicator={false}
            data={paymentCourses}
            renderItem={({ item }) => (<PaidItem order={item} />)
            }
            keyExtractor={item => item.id}
          />
          : <NoData title="Pas de cours disponible" />
      }
    </>
  )
}

export default Payments

const styles = StyleSheet.create({})