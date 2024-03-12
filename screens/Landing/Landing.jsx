import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

import CourseItem from './components/CourseItem';
import NoData from '../../components/NoData';
import { addToCart } from '../../redux/actions/cartActions';

const Landing = () => {
  const navigation = useNavigation();
  const { existingCourses } = useSelector((state) => state.courses);
  const courseList = existingCourses.filter(c => c.selected === false);
  const dispatch = useDispatch();
  return (
    <>
      {
        courseList?.length
          ? <FlatList
            showsVerticalScrollIndicator={false}
            data={courseList}
            renderItem={({ item }) => (
              <CourseItem
                course={item}
                viewDetails={() => navigation.push('Details', item)}
                addToCart={() => dispatch(addToCart(item.id, existingCourses))}
              />)
            }
            keyExtractor={item => item.id}
          />
          : <NoData title="Pas de cours disponible" />
      }
    </>
  )
}

export default Landing

const styles = StyleSheet.create({})