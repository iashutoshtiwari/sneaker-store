import { getApiUrl } from '@/utils/helper'

export const getCart = () => async (dispatch) => {
  const apiUrl = getApiUrl()
  const url = apiUrl + '/users/logout'

  const response = await axios(url, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }).catch((error) => {
    console.error('[logoutUser] >> Exception:\n', error)
  })

  if (response?.status === 200) {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
  }
}
