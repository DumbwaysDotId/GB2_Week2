const initialState = {
  data: [],
  isLoading: false,
  number: 100
}

// this.setState({
//   // contacts: {
//   //   number
//   // }
// })
export default contacs = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CONTACT_PENDING': 
      return {
        isLoading: true
      }

    case 'GET_CONTACT_REJECTED': 
      return {
        isLoading: false
      }

    case 'GET_CONTACT_FULFILLED': 
      return {
        isLoading: false,
        data: action.payload.data
      }

    case 'CREATE_CONTACT_PENDING': 
      return {
        isLoading: true
      }

    case 'CREATE_CONTACT_REJECTED': 
      return {
        isLoading: false
      }

    case 'CREATE_CONTACT_FULFILLED': 
      return {
        isLoading: false
      }

    case 'INC_NUMBER':
      return { number: action.payload}

    case 'DEC_NUMBER':
      return { number: action.payload}
  
    default:
      return state;
  }
}