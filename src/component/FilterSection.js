import React, { useState } from "react";
import Select from "react-select";
import styled from "styled-components";
import makeAnimated from "react-select/animated";

const optionType = [
	{ value: "pick-up", label: "Pick Up" },
	{ value: "delivery", label: "Delivery" }
];

const optionCuisine = [
	{ value: "italian", label: "Italian" },
	{ value: "chinese", label: "Chinese" },
	{ value: "thai", label: "Thai" },
	{ value: "mexican", label: "Mexican" },
	{ value: "indian", label: "turkish" }
];

const optionDietary = [
	{ value: "kosher", label: "Kosher" },
	{ value: "halal", label: "Halal" },
	{ value: "gluten-free", label: "Gluten Free" },
	{ value: "lactose-free", label: "Lactose free" },
	{ value: "vegan", label: "Vegan" },
	{ value: "vegetarian", label: "Vegetarian" }
];

const FilterSection = () => {
	const [type, setType] = useState([]);
	const [cuisine, setCuisine] = useState([]);
	const [dietary, setDietary] = useState([]);

	const customTheme = (theme) => {
		return {
			...theme,
			colors: {
				...theme.colors,
				primary25: "#fec925",
				primary: "#5ab190"
			}
		};
	};
	return (
		<Container>
			<SelectContainer>
				<Select
					components={makeAnimated()}
					theme={customTheme}
					onChange={setType}
					options={optionType}
					placeholder='Select Service Type'
					isSearchable
					isMulti
					autoFocus
				/>
			</SelectContainer>
			<SelectContainer>
				<Select
					components={makeAnimated()}
					theme={customTheme}
					onChange={setCuisine}
					options={optionCuisine}
					placeholder='Select Cuisine'
					isSearchable
					isMulti
					autoFocus
				/>
			</SelectContainer>
			<SelectContainer>
				<Select
					components={makeAnimated()}
					theme={customTheme}
					onChange={setDietary}
					options={optionDietary}
					placeholder='Select Dietary '
					isSearchable
					isMulti
					autoFocus
				/>
			</SelectContainer>
		</Container>
	);
};

export default FilterSection;

const SelectContainer = styled.div`
	width: 300px;
	margin: 10px;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	margin: 40px 0;
`;
