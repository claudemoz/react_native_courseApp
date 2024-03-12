
const initialState = {
  cartCourses: [],
}

const reducerCart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { courseId, coursesList } = action;
      const course = coursesList?.find(c => c.id === courseId);
      if (course) {
        const courseInCart = state.cartCourses.find(c => c.id === course.id);
        if (courseInCart) {
          return {
            ...state,
            cartCourses: state.cartCourses.map(c => c.id === course.id ? { ...c, quantity: c.quantity + 1 } : c),
          }
        } else {
          return {
            ...state,
            cartCourses: [...state.cartCourses, { id: course.id, title: course.title, price: course.price, quantity: 1 }],
          }
        }
      }
    case 'REMOVE_COURSE_CART':
      return {
        ...state,
        cartCourses: state.cartCourses.filter(c => c.id !== action.courseId)
      }
    case 'ADD_PAYMENT':
      return {
        ...state,
        cartCourses: []
      }

    case 'DELETE_COURSE':
      return {
        ...state,
        cartCourses: state.cartCourses.filter(c => c.id !== action.courseId)
      }
    default:
      return state
  }
}

export default reducerCart;