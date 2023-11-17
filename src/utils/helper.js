export const getApiUrl = () =>
  //TODO: Modify this method to support environment variables
  'http://localhost:3001'

export const getAuthToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token')
  } else {
    return null
  }
}
