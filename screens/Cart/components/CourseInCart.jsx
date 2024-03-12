import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../../../styles/COLORS'
import { useDispatch } from 'react-redux';
import { removeCourseInCart } from '../../../redux/actions/cartActions';

const CourseInCart = ({ course }) => {

  const dispatch = useDispatch();
  return (
    <View>
      <View style={styles.courseContainer}>
        <Text style={styles.courseTitle}>{course.title}</Text>
        <View style={styles.wrapperRigth}>
          <Text style={styles.coursePrice}>{course.price} €</Text>
          <TouchableOpacity style={styles.delteBtn}>
            <MaterialIcons
              name="delete"
              size={24}
              color={COLORS.green}
              onPress={() => dispatch(removeCourseInCart(course.id))}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default CourseInCart

const styles = StyleSheet.create({
  container: {

  },
  courseContainer: {
    backgroundColor: COLORS.white,
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  courseTitle: {

  },
  coursePrice: {
    // fontSize: 15,
    fontWeight: 'bold',
  },
  wrapperRigth: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  delteBtn: {
    marginLeft: 15
  }
})