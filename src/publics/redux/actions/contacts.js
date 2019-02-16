import axios from "axios";

export const getContacts = () => {
  return {
    type: 'GET_CONTACT',
    payload: axios.get('http://103.15.226.134:3333/api/v1/shippings')
  }
}

export const createContact = (body) => {
  return {
    type: 'CREATE_CONTACT',
    payload: axios({
      method: 'post',
      url: 'http://103.15.226.134:3333/api/v1/shipping',
      data: body
    })
  }
}


export const incNumber = (number) => {
  return {
    type: 'INC_NUMBER',
    payload: number
  }
}

export const decNumber = () => {
  return {
    type: 'DEC_NUMBER',
    payload: 1
  }
}