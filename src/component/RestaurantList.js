import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataContext';
import styled from 'styled-components';
import { SIZE } from './common/size';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import RestaurantCard from './RestaurantCard';

const RestaurantList = () => {
	const { data } = useContext(DataContext);
	const [selectedType, setSelectedType] = useState('');
	const [selectedCuisine, setSelectedCuisine] = useState('');
	const [selectedDietary, setSelectedDietary] = useState('');

	const customTheme = (theme) => {
		return {
			...theme,
			colors: {
				...theme.colors,
				primary25: '#fec925',
				primary: '#5ab190'
			}
		};
	};

	const filterByType = (rest) => {
		if (selectedType === 'delivery') {
			return rest.delivery;
		}

		if (selectedType === 'pickup') {
			return rest.pickup;
		}

		if (selectedType === 'all') {
			return rest.delivery || rest.pickup;
		}
		return true;
	};

	const filterByCuisine = (rest) => {
		if (selectedCuisine !== '') {
			return rest.cuisine === selectedCuisine;
		}

		return true;
	};

	const filterByDietaryRestrictions = (rest) => {
		if (selectedDietary !== '') {
			return rest.dietaryRestrictions === selectedDietary;
		}
		return true;
	};

	return (
		<div>
			<FilterContainer>
				<SelectContainer>
					<Select
						components={makeAnimated()}
						theme={customTheme}
						onChange={(e) => setSelectedType(e.value)}
						options={optionType}
						placeholder='Select Service Type'
						isSearchable
						autoFocus
					/>
				</SelectContainer>
				<SelectContainer>
					<Select
						components={makeAnimated()}
						theme={customTheme}
						onChange={(e) => setSelectedCuisine(e.value)}
						options={optionCuisine}
						placeholder='Select Cuisine'
						isSearchable
						autoFocus
					/>
				</SelectContainer>
				<SelectContainer>
					<Select
						components={makeAnimated()}
						theme={customTheme}
						onChange={(e) => setSelectedDietary(e.value)}
						options={optionDietary}
						placeholder='Select Dietary '
						isSearchable
						autoFocus
					/>
				</SelectContainer>
			</FilterContainer>
			<ListContainer>
				{data
					.filter(filterByType)
					.filter(filterByCuisine)
					.filter(filterByDietaryRestrictions)
					.map((res) => (
						<StyledLink
							to={`/restaurants/${res.name}`}
							style={{ textDecoration: 'none' }}
							key={res.id}
						>
							<RestaurantCard item={res}></RestaurantCard>
						</StyledLink>
					))}
			</ListContainer>
		</div>
	);
};

export default RestaurantList;

const ListContainer = styled.div`
	margin: 0 auto;
	width: 1200px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	@media (max-width: 1170px) {
		width: 100%;
	}
`;

const SelectContainer = styled.div`
	width: 300px;
	margin: 10px;
`;

const FilterContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 40px 0;
	@media (max-width: ${SIZE.medium}) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const optionType = [
	{ value: 'pickup', label: 'Pick Up' },
	{ value: 'delivery', label: 'Delivery' },
	{ value: 'all', label: 'Show All' }
];

const optionCuisine = [
	{ value: 'italian', label: 'Italian' },
	{ value: 'chinese', label: 'Chinese' },
	{ value: 'thai', label: 'Thai' },
	{ value: 'mexican', label: 'Mexican' },
	{ value: 'indian', label: 'Indian' },
	{ value: 'indian', label: 'Turkish' },
	{ value: '', label: 'Show All' }
];

const optionDietary = [
	{ value: 'Kosher', label: 'Kosher' },
	{ value: 'Halal', label: 'Halal' },
	{ value: 'Gluten Free', label: 'Gluten Free' },
	{ value: 'Lactose Free', label: 'Lactose free' },
	{ value: 'Vegan', label: 'Vegan' },
	{ value: 'Vegetarian', label: 'Vegetarian' },
	{ value: '', label: 'Show All' }
];

const StyledLink = styled(Link)`
	text-decoration: none;
	color: #333;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;
