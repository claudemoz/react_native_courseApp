export const addPayment = (cartCourses, totalPrice) => {
  return {
    type: 'ADD_PAYMENT',
    orderDetail: {
      cart: cartCourses,
      price: totalPrice
    },
  }
}