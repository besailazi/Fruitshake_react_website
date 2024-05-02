import React from 'react'
import FruitShakesList from '../components/FruitShakesList/FruitShakesList'
import styles from './ShakesPage.module.css'

const ShakesPage = () => {
  return (
	 <>
     <div className={styles.shakesPage_main_container}>
      <FruitShakesList />
     </div>
   </>
  )
}

export default ShakesPage