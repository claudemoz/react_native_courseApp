const initialState = {
  paymentCourses: []
}

const reducerPayment = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PAYMENT':
      const { cart, price } = action.orderDetail
      return {
        ...state,
        paymentCourses: [
          ...state.paymentCourses,
          {
            id: Date.now(),
            orderItems: cart,
            total: price,
            date: new Date().toISOString()
          },
        ]
      }
    default:
      return state
  }
}

export default reducerPayment;