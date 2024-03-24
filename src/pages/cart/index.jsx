import React from 'react'
import styles from './index.module.scss'
import Error from 'next/error'
import { isUserLoggedIn } from '@/redux/selectors/home/homeSelector'

const Cart = () => {
  const loggedIn = isUserLoggedIn()

  return !loggedIn ? <Error statusCode={404} /> : <div className={styles.container}>Cart</div>
}

export default Cart
