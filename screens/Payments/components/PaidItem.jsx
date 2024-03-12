import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';
import COLORS from '../../../styles/COLORS';
import { useState } from 'react';
import CoursesOverview from './CoursesOverview';

const PaidItem = ({ order }) => {
  const { date, orderItems, total } = order;
  const [isShow, setIsShow] = useState(false);
  return (
    <ScrollView style={styles.paidContainer}>
      <View style={styles.paidCourses}>
        <View style={styles.coursesInfo}>
          <Text style={styles.date}>{total} € </Text>
          <Text style={styles.totalPaid}>{moment(date, 'YYYY/MM/DD').format('DD/MM/YYYY')} à {moment(date, 'YYYY/MM/DD HH:mm').format('HH:mm')}</Text>
        </View>
        <TouchableOpacity style={styles.iconBtn}>
          <MaterialIcons
            onPress={() => setIsShow(!isShow)}
            name={isShow ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            size={24} color={COLORS.green}
          />
        </TouchableOpacity>
      </View>


      <View style={styles.detailCourses}>
        {
          isShow && (orderItems?.map(item => <CoursesOverview key={item.id} course={item} />))
        }
      </View>
    </ScrollView>
  )
}

export default PaidItem

const styles = StyleSheet.create({
  paidContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 10,
    paddingTop: 24,
    paddingHorizontal: 15
  },
  paidCourses: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  coursesInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1
  },
  totalPaid: {
    fontSize: 18
  },
  date: {
    fontSize: 16
  },
  iconBtn: {
    marginLeft: 4
  },
  detailCourses: {
    marginTop: 20,
  }
})