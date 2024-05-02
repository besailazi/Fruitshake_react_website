import React from 'react'
import styles from './FruitShake.module.css'

const FruitShake = ({fruitShake}) => {
  return (
	 <div className={styles.fruitshake_container}>
		<div className={styles.image_container}>
			<img src={`/${fruitShake.name.replace(/\s/g, '_')}.jpg`} 
			alt="Fruitshake image" className={styles.image}/>
		</div>
		<div className={styles.info_container}>
			<h2>{fruitShake.name}</h2>
			<span>
				<strong>Ingredients: </strong>
				{fruitShake.ingredients.map((ingredient, index)=>{
              return <span key={index}>{ingredient}</span>;
				})}
			</span>
			<span> 
				<strong>Price:</strong> {fruitShake.price}
			</span>

		</div>

	 </div>
  )
}

export default FruitShake