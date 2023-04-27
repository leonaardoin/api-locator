import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext({ data :[] });

export const DataContextProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const restaurant_API =
		"https://redi-final-restaurants.herokuapp.com/restaurants";

	useEffect(() => {
	
		async function fetchData() {
			const response = await fetch(restaurant_API);
			console.log(response);
			const data = await response.json();
			setData(data.results);
			console.log("the data is being called");
			console.log(data);
		}
		fetchData();
	}, []);

	return (
		<DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
	);
};
