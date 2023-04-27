import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

import { DataContext } from "../DataContext";

const Restaurant = () => {
	let { name } = useParams();
	const { data } = useContext(DataContext);
	const history = useHistory();

	const goBackHandle = () => {
		history.goBack();
	};

	const rest = data.filter((item) => item.name === name)[0];

	if (!rest) {
		return null;
	}

	return (
		<div
			style={
				({ display: "flex" },
				{ justifyContent: "center" },
				{ border: "1px solid green" },
				{ padding: "1% 10% 5% 10%" })
			}
		>
			<Container>
				<StyledButton onClick={goBackHandle}>Go Back</StyledButton>
				<StyledContainer key={rest.id}>
					<FoodImg
						style={{ backgroundImage: `url(${rest.photos[0].links[0]})` }}
					></FoodImg>
					<StyledName>{rest.name}</StyledName>
					<TextContainer>
						<StyledRating>
							<span style={{ letterSpacing: "8px" }}>
								{getRatingStar(rest.rating)}
							</span>
							{rest.rating} / 5.0
							<StyledSpan>({rest.user_ratings_total})</StyledSpan>
						</StyledRating>
						<StyledCategoryContainer>
							<StyledCuisine style={{ textTransform: "capitalize" }}>{rest.cuisine}</StyledCuisine>
							<StyledDietary>{rest.dietaryRestrictions}</StyledDietary>
						</StyledCategoryContainer>
						<StyledDetailList>
							<StyledListItem>
								<StyledSpan>Opening Hours</StyledSpan>
								{rest.opening_hours.hours.open} ~
								{rest.opening_hours.hours.close}
							</StyledListItem>
							<StyledListItem>
								<StyledSpan> Delievery </StyledSpan>
								{rest.delivery ? "available✨" : "not available"}
							</StyledListItem>
							<StyledListItem>
								<StyledSpan>Pick Up</StyledSpan>{" "}
								{rest.pickup ? "available✨" : "not available"}
							</StyledListItem>

							<StyledListItem>{rest.formatted_address}</StyledListItem>
							<StyledListItem> {rest.social.phone}</StyledListItem>
							<StyledListItem>{rest.social.email}</StyledListItem>
						</StyledDetailList>
					</TextContainer>
				</StyledContainer>
			</Container>
		</div>
	);
};

export default Restaurant;

const Container = styled.div`
	margin: 0 auto;
	width: 70%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	min-width:400px;
`;

const StyledContainer = styled.div`
	border-radius: 10px;
	width: 640px;
	margin: 0 auto;
	background-color: #fefefe;
	-webkit-box-shadow: 24px 20px 42px -46px rgba(0, 0, 0, 0.32);
	-moz-box-shadow: 24px 20px 42px -46px rgba(0, 0, 0, 0.32);
	box-shadow: 24px 20px 42px -46px rgba(0, 0, 0, 0.32);
`;

const FoodImg = styled.div`
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	width: 100%;
	height: 200px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	margin: 0;
`;

const TextContainer = styled.div`
	padding: 0 16px 12px 16px;
	line-height: 1.6;
`;

const StyledName = styled.h2`
	font-family: "Raleway", sans-serif;
	font-size: 30px;
	margin: 0;
	border-radius: 30px;
	display: inline;
	padding: 10px 20px 6px 20px;
	position: relative;
	top: -10px;
	background-color: white;
	line-height: 1.6;
`;

const StyledSpan = styled.span`
	font-family: "Quicksand", sans-serif;
	font-size: 16px;
	font-weight: 600;
	margin: 0;
	// border: 1px solid yellow;
	padding: 0 5px;
`;

const StyledRating = styled.p`
	font-family: "Quicksand", sans-serif;
	font-size: 16px;
	font-weight: 400;
	margin: 0;
`;

const StyledCategoryContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 10px 0;
`;

const StyledCuisine = styled.p`
	font-family: "Open Sans", sans-serif;
	border: 1px solid green;
	border-radius: 40px;
	margin: 0px;
	margin-right: 10px;
	padding: 5px 20px;
`;

const StyledDietary = styled.p`
	font-family: "Open Sans", sans-serif;
	border: 1px solid orange;
	border-radius: 40px;
	margin: 0px;
	padding: 5px 20px;
`;

const StyledDetailList = styled.ul`
	// border: 1px solid green;
	list-style: none;
	padding-left: 0;
	margin: 0;
	padding: 0 0 10px 0;
`;

const StyledListItem = styled.li`
	font-family: "Open Sans", sans-serif;
	font-size: 16px;
	padding: 3px 0;
`;

const getRatingStar = (rating) => {
	if (rating <= 2.3) {
		return `⭐⭐`;
	} else if (rating <= 2.8) {
		return `⭐⭐⭐`;
	} else if (rating <= 3.6) {
		return `⭐⭐⭐⭐`;
	} else if (rating <= 4.2) {
		return `⭐⭐⭐⭐`;
	} else {
		return `⭐⭐⭐⭐⭐`;
	}
};

const StyledButton = styled.button`
	width: 140px;
	border: 1px solid red;
	padding: 10px 20px;
	font-family: "Quicksand", sans-serif;
	font-size: 18px;
	font-weight: 600;
	border-radius: 40px;
	border: 3px solid #5ab190;
	margin: 1rem;
	margin-top: 0;
	margin-bottom: 2rem;
	-webkit-box-shadow: 24px 20px 42px -46px rgba(0, 0, 0, 0.32);
	-moz-box-shadow: 24px 20px 42px -46px rgba(0, 0, 0, 0.32);
	box-shadow: 24px 20px 42px -46px rgba(0, 0, 0, 0.32);
	&:hover {
		border: 3.5px solid transparent;
	}
	outline:none;
	cursor: pointer;
`;
