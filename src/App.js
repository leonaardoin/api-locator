import React from "react";
import { Router, Route, Switch } from "react-router";

import RestaurantList from "./component/RestaurantList";
import Header from "./component/Header";
import Restaurant from "./component/Restaurant";

import "./App.css";

function App() {
	return (
		<div className='App'>
			<Header />
			<main>
				<Switch>
					<Route path='/restaurants/:name'>
						<Restaurant />
					</Route>
					<Route path='/'>
						<RestaurantList />
					</Route>
				</Switch>
			</main>
		</div>
	);
}

export default App;
