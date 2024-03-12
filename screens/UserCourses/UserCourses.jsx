import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import NoData from '../../components/NoData'
import COLORS from '../../styles/COLORS'
import { deleteCourse } from '../../redux/actions/courseActions';

const UserCourses = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { loggedInMemberCourses } = useSelector(state => state.courses)
  const handleDeleteCourse = (id) =>{
    Alert.alert(
      'ATTENTION',
      'Voulez-vous supprimer ce course',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Suppimer', onPress: () => dispatch(deleteCourse(id))},
      ]
    )
    
  }
  return (
    <View>
      {
        loggedInMemberCourses.length > 0
          ? <FlatList
            data={loggedInMemberCourses}
            renderItem={({ item }) => (
              <View style={styles.courseContainer}>
                <View style={styles.courseInfo}>
                  <Text numberOfLines={1} style={styles.courseTitle}>{item.title}</Text>
                  <View style={styles.courseInfoRigth}>
                    <Text style={styles.coursePrice}>{item.price.toFixed(2)} €</Text>
                    <View style={styles.courseIcons}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Edit', {
                          course: item
                        })}
                      >
                        <MaterialIcons name="edit" size={24} color={COLORS.green} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => handleDeleteCourse(item.id)}>
                        <MaterialIcons name="delete" size={24} color={COLORS.green} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
          : <NoData title="Pas de cours disponible" />
      }
    </View>
  )
}

export default UserCourses

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginVertical: 9,
    marginHorizontal: 19,
    paddingVertical: 15,
    paddingHorizontal: 9
  },
  courseInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  courseTitle: {
    width: '70%'
  },
  coursePrice: {
    color: COLORS.green
  },
  courseInfoRigth: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  courseIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 5
  }
})