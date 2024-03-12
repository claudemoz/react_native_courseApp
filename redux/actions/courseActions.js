export const deleteCourse = (IdCourse) => {
  return {
    type: 'DELETE_COURSE',
    courseId: IdCourse,
  }
}
export const addCourse = (course) => {
  return {
    type: 'ADD_COURSE',
    payload: course,
  }
}
export const editCourse = (course) => {
  return {
    type: 'EDIT_COURSE',
    payload: course,
  }
}