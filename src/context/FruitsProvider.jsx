import React, { createContext } from 'react'
import { useState, useEffect } from 'react'

const fruitsContext = createContext()

const FruitsProvider = ({children}) => {
	const [fruitsList, setFruitsList] = useState([])

	const fetchFruits = async ()=>{
		try {
			const response = await fetch('http://localhost:4000/');
			const data = await response.json();
			console.log(data);
			const sortedFruits = data.sort((a, b)=> a.name.localeCompare(b.name))
			setFruitsList(sortedFruits);
			
		} catch (error) {
			console.log(error);
			
		}
	}
	useEffect(() => {
	  fetchFruits();
	}, []);
	
  return (
	 <div>
		<fruitsContext.Provider value={{fruitsList, setFruitsList}}>
         {children}
		</fruitsContext.Provider>

	 </div>
  )
}

export {FruitsProvider, fruitsContext};