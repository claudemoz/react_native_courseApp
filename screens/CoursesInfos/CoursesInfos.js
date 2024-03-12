import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../../styles/COLORS';
import CustomButton from '../../components/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';

const CoursesInfos = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { existingCourses } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const { id, title, image, price, description } = route.params;

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: title,
  //   });
  // }, [navigation]);

  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
      >
        <Image
          style={styles.courseImage}
          source={{ uri: image }}
        />
        <View style={styles.courseDetails}>
          <Text style={styles.courseDescription}>{description}</Text>
          <Text style={styles.courseDescription}>{description}</Text>
          <Text style={styles.courseDescription}>{description}</Text>
          <Text style={styles.courseDescription}>{description}</Text>
          <Text style={styles.courseDescription}>{description}</Text>
          <Text style={styles.courseDescription}>{description}</Text>
          <Text style={styles.courseDescription}>{description}</Text>
          <Text style={styles.courseDescription}>{description}</Text>
          <Text style={styles.courseDescription}>{description}</Text>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <View style={styles.footerTop}>
          <View style={styles.coursePriceWrapper}>
            <Text style={styles.coursePrice}>{price.toFixed(2)} €</Text>
          </View>
        </View>
        <View style={styles.footerBottom}>
          <MaterialIcons
            name="arrow-back-ios"
            size={24}
            color={COLORS.white}
            onPress={() => navigation.goBack()}
          />
          <CustomButton
            title="Ajouter au panier"
            style={styles.button}
            action={() => dispatch(addToCart(id, existingCourses))}
            styleTitle={styles.buttonTitle}
          />
        </View>
      </View>
    </View>
  )
}

export default CoursesInfos

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: COLORS.white,
    height: '80%'
  },
  courseImage: {
    width: '100%',
    height: 250,
  },
  courseDetails: {
    padding: 20,
    alignItems: 'center'
  },
  courseDescription: {
    color: COLORS.dimGray,
    // marginHorizontal: 20,
    marginVertical: 10
  },
  footerContainer: {
    height: '20%',
  },
  footerTop: {
    height: '40%',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  coursePriceWrapper: {
    paddingRight: 40
  },
  coursePrice: {
    fontSize: 24,
    color: COLORS.green
  },
  footerBottom: {
    height: '60%',
    backgroundColor: COLORS.green,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30
  },
  button: {
    width: 250,
    backgroundColor: COLORS.lightOrange
  },
  buttonTitle: {
    fontSize: 19
  }
})