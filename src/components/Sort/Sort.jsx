import React, { useContext, useState } from 'react'
import { fruitsContext } from '../../context/FruitsProvider';
import styles from './Sort.module.css'


const Sort = () => {
	const {fruitsList, setFruitsList} = useContext(fruitsContext);
   const [selectedOptions, setSelectedOptions] = useState('all');

	const handleSortChange = (e)=>{
     const selectedValue = e.target.value;
	  setSelectedOptions(selectedValue);

	  let sortedFruits = [...fruitsList];

	  switch (selectedValue) {
		case 'highest-calories':
			sortedFruits.sort((a, b)=>{
				return b.nutritions.calories - a.nutritions.calories;
			})	
			break;
			case 'lowest-fat':
			sortedFruits.sort((a, b)=>{
				return a.nutritions.fat - b.nutritions.fat;
			})	
	      break;
			case 'lowest-sugar':
			sortedFruits.sort((a, b)=>{
				return a.nutritions.sugar - b.nutritions.sugar;
			})	
	      break;
			case 'lowest-carbs':
			sortedFruits.sort((a, b)=>{
				return a.nutritions.carbohydrates - b.nutritions.carbohydrates;
			})	
	      break;
			case 'highest-protein':
			sortedFruits.sort((a, b)=>{
				return b.nutritions.protein - a.nutritions.protein;
			})	
	      break;
       

		default:
			sortedFruits.sort((a, b)=> a.name.localeCompare(b.name));
	  }
	  setFruitsList(sortedFruits);
	};
	console.log(fruitsList);
	
	return (
		<>
	 <div className={styles.sort_container}>

		<label htmlFor='sort-options'>Sort By:</label>
		<select 
		name="sort-options" 
		onChange={handleSortChange} 
		value={selectedOptions}>

			<option value="all">All</option>
			<option value="highest-calories">Highest-Calories</option>
			<option value="lowest-fat">Lowest Fat</option>
			<option value="lowest-sugar">Lowest Sugar</option>
			<option value="lowest-carbs">Lowest Carbs</option>
			<option value="highest-protein">Highest Protein</option>
		</select>
	 </div>

	 <ul>
		<li className={`${styles.liHeader} ${styles.liItem}`}>
		      <span>Name</span>
				<span>Calories</span>
				<span>Fat</span>
				<span>Sugar</span>
				<span>Carbs</span>
				<span>Protein</span>
		</li>
	
		{fruitsList.map((fruit) => {
    return (
        <li className={styles.liItem}>
            <span>{fruit.name}</span>
            <span>{fruit.nutritions.calories}</span>
            <span>{fruit.nutritions.fat}</span>
            <span>{fruit.nutritions.sugar}</span>
            <span>{fruit.nutritions.carbohydrates}</span>
            <span>{fruit.nutritions.protein}</span>
        </li>
    );
})}

	 </ul>
	 </>
  )
}

export default Sort