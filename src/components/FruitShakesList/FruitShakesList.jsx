import React from 'react'
import fruitShakesData from '../../assets/data/fruitShakesData'
import styles from './FruitShakesList.module.css'
import FruitShake from '../FruitShake/FruitShake'
import { useState } from 'react'
const FruitShakesList = () => {
	const [fruitShakesDataList, setFruitShakesDataList] = useState(fruitShakesData)
  return (
	 <div>
		<ul className={styles.shakes_main_container}>
       {fruitShakesDataList.map(shake => {
			return <FruitShake fruitShake = {shake} key={shake.id}/>
		 })
		 }
		</ul>
	 </div>
  )
}

export default FruitShakesList