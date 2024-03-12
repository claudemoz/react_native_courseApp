import { StyleSheet, Text, View } from 'react-native'
import COLORS from '../../../styles/COLORS'

const CoursesOverview = ({ course }) => {
  return (
    <View style={styles.container}>
      <View style={styles.CoursesDetails}>
        <Text numberOfLines={1} style={styles.title}>{course.title}</Text>
        <Text style={styles.price}>{course.price} €</Text>
      </View>
    </View>
  )
}

export default CoursesOverview

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderColor: COLORS.lightGrey,
    borderTopWidth: 1,
  },
  CoursesDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 19
  },
  title: {
    width: '70%'
  },
  price: {
    // color: COLORS.green
  }
})