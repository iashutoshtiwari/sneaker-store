import { getAuthToken } from '@/utils/helper'
// import { useSelector } from "react-redux";

export const isUserLoggedIn = () => {
  const token = getAuthToken()

  if (token) {
    return true
  } else {
    return false
  }
}

export const getUserName = () => {
  if (typeof window !== 'undefined') {
    const name = localStorage.getItem('name')
    return name
  } else {
    return null
  }
}
