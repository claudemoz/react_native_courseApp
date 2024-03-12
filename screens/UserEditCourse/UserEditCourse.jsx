import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import COLORS from '../../styles/COLORS';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { addCourse, editCourse } from '../../redux/actions/courseActions';

const UserEditCourse = () => {
  const route = useRoute();
  const navigation = useNavigation()
  const { course } = route.params;
  const dispatch = useDispatch()
  const initCourseData = {
    id:course?.id ? course?.id : "11",
    selected: false,
    instructorId: course?.instructorId ,
    // 
    title:course?.title ? course?.title : '',
    image: course?.image ? course?.image : '',
    price: course?.price ? course?.price : '',
    description: course?.description ? course?.description : ''
  }
  const [dataEdit, setDataEdit] = useState(initCourseData);
  const submitData = () =>{
    if(course?.id){
      dispatch(editCourse(dataEdit));
      navigation.goBack();
    }else{
      dispatch(addCourse(dataEdit));
      console.log("initCourseData ", initCourseData);
      setDataEdit(initCourseData)
      navigation.goBack();
    }
  }
  return (
    <ScrollView>
      <View style={styles.formContainer}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Titre:</Text>
          <TextInput
            style={styles.input}
            onChangeText={val => setDataEdit({...dataEdit, title:val})}
            value={dataEdit.title}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image:</Text>
          <TextInput
            style={styles.input}
            onChangeText={val => setDataEdit({...dataEdit, image:val})}
            value={dataEdit.image}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Prix:</Text>
          <TextInput
            style={styles.input}
            onChangeText={val => setDataEdit({...dataEdit, price:val})}
            value={dataEdit.price.toString()}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Description:</Text>
          <TextInput
            style={styles.input}
            onChangeText={val => setDataEdit({...dataEdit, description:val})}
            value={dataEdit.description}
            multiline
            numberOfLines={5}
          />
        </View>
        <TouchableOpacity onPress={() => submitData()}>
          <View style={styles.btnContainer}>
          <Text style={styles.btnSubmit}>Valider</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default UserEditCourse

const styles = StyleSheet.create({
  formContainer:{
    backgroundColor: COLORS.white,
    borderRadius: 9,
    padding: 20,
    margin: 20
  },
  formControl:{
    width: "100%"
  },
  label:{
    marginVertical: 15,
    color: COLORS.green,
    fontWeight: 'bold'
  },
  input:{
    padding: 9,
    borderWidth: 0.5,
    borderColor: COLORS.green,
    borderRadius: 6
  },
  btnContainer:{
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 25,
    backgroundColor: COLORS.orange,
    marginTop: 20,
    borderRadius: 5
  },
  btnSubmit:{
    fontSize: 19,
    textAlign: 'center',
    color: COLORS.white
  }
})