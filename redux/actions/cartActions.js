export const addToCart = (IdCourse, courseList) => {
  return {
    type: 'ADD_TO_CART',
    courseId: IdCourse,
    coursesList: courseList
  }
}

export const removeCourseInCart = (IdCourse) => {
  return {
    type: 'REMOVE_COURSE_CART',
    courseId: IdCourse,
  }
}