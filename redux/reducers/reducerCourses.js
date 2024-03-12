import COURSES from "../../data/testData";

const initialState = {
  existingCourses: COURSES,
  loggedInMemberCourses: COURSES.filter(c => c.instructorId === '1')
}

const reducerCourses = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { courseId } = action;
      const i = state.existingCourses.findIndex(c => c.id === courseId);
      if (i !== -1) {
        return {
          ...state,
          existingCourses: state.existingCourses.map((course, index) => {
            if (index === i) {
              return {
                ...course,
                selected: !course.selected
              };
            }
            return course;
          })
        }
      }
    case 'REMOVE_COURSE_CART':
      const _i = state.existingCourses.findIndex(c => c.id === action.courseId);
      if (_i !== -1) {
        return {
          ...state,
          existingCourses: state.existingCourses.map((course, index) => {
            if (index === _i) {
              return {
                ...course,
                selected: !course.selected
              };
            }
            return course;
          })
        }
      }
    case 'DELETE_COURSE':
        return {
          ...state,
          loggedInMemberCourses: state.loggedInMemberCourses.filter(c => c.id !== action.courseId)
        }
    case 'ADD_COURSE':
      console.log("updateCourse ", action.payload);
        return {
          ...state,
          existingCourses: [...state.existingCourses, {...action.payload, price: Number(action.payload.price)}],
          loggedInMemberCourses: [...state.loggedInMemberCourses, {...action.payload, price: Number(action.payload.price)}]
        }
    case 'EDIT_COURSE':
      
     
        return {
          ...state,
          existingCourses: state.existingCourses.map(c => c.id !== action.payload.id ? c : {...action.payload, price: Number(action.payload.price)}),
          loggedInMemberCourses: state.loggedInMemberCourses.map(c => c.id !== action.payload.id ? c : {...action.payload, price: Number(action.payload.price)})
        }
    default:
      return state;
  }
}

export default reducerCourses;