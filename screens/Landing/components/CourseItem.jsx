import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../../../styles/COLORS';

const CourseItem = ({ course, viewDetails, addToCart }) => {
  return (
    <TouchableHighlight
      underlayColor={COLORS.green}
      onPress={viewDetails}
    >
      <View style={styles.courseContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageContent}
            source={{ uri: course.image }}
          />
        </View>
        <View style={styles.descContainer}>
          <Text style={styles.courseTitle}>{course.title}</Text>
          <Text style={styles.coursePrice}>{course.price.toFixed(2)} €</Text>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity
            onPress={viewDetails
            }>
            <MaterialIcons name="remove-red-eye" size={24} color={COLORS.green} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={addToCart}
          >
            <MaterialIcons name="shopping-basket" size={24} color={COLORS.green} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default CourseItem

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    height: 300,
    margin: 25,
    borderColor: COLORS.lightGrey,
    borderWidth: 1
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    resizeMode: 'cover',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    overflow: 'hidden'
  },
  imageContent: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  descContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '20%'
  },
  courseTitle: {
    fontSize: 15,
    marginVertical: 4,
    color: COLORS.green,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  coursePrice: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '20%',
    paddingHorizontal: 20
  }
})