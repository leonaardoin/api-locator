import React from 'react';
import styled from 'styled-components';

const RestaurantCard = ({ item }) => {
	return (
		<div>
			<StyledContainer key={item.id}>
				<FoodImg
					style={{ backgroundImage: `url(${item.photos[0].links[0]})` }}
				></FoodImg>
				<StyledName>{item.name}</StyledName>
				<TextContainer>
					<StyledRating>
						{item.rating} / 5.0
						<StyledSpan>({item.user_ratings_total})</StyledSpan>
					</StyledRating>
					<StyledCategoryContainer>
						<StyledCuisine style={{ textTransform: 'capitalize' }}>
							{item.cuisine}
						</StyledCuisine>
						<StyledDietary>{item.dietaryRestrictions}</StyledDietary>
					</StyledCategoryContainer>
					<StyledDetailList>
						<StyledListItem>
							<StyledSpan>
								Opening Hours{' '}
								<StyledSpan>
									{item.opening_hours.hours.open} {' ~ '}
									{item.opening_hours.hours.close}
								</StyledSpan>
							</StyledSpan>
						</StyledListItem>
						<StyledListItem>
							<StyledSpan>Delievery </StyledSpan>
							{item.delivery ? 'available✨' : 'not available'}
						</StyledListItem>
						<StyledListItem>
							<StyledSpan>Pick Up</StyledSpan>{' '}
							{item.pickup ? 'available✨' : 'not available'}
						</StyledListItem>

						<StyledListItem>{item.formatted_address}</StyledListItem>
						<StyledListItem> {item.social.phone}</StyledListItem>
						<StyledListItem>{item.social.email}</StyledListItem>
					</StyledDetailList>
				</TextContainer>
			</StyledContainer>
		</div>
	);
};

export default RestaurantCard;

const StyledContainer = styled.div`
	box-sizing: border-box;
	border-radius: 10px;
	width: 340px;
	height: 520px;
	margin: 0 1em 20px 1em;
	background-color: #fefefe;
	-webkit-box-shadow: 24px 20px 42px -46px rgba(0, 0, 0, 0.32);
	-moz-box-shadow: 24px 20px 42px -46px rgba(0, 0, 0, 0.32);
	box-shadow: 24px 20px 42px -46px rgba(0, 0, 0, 0.32);
	&:hover {
		border: 2px solid #fec925;
	}
`;

const FoodImg = styled.div`
	border: 1px solid transparent;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	width: 100%;
	height: 200px;
	background-repeat: no-repeat;
	background-position: center;
	margin: 0;
`;

const StyledName = styled.h2`
	font-family: 'Raleway', sans-serif;
	font-size: 19px;
	margin: 0;
	border-radius: 30px;
	display: inline;
	padding: 10px 20px 6px 20px;
	position: relative;
	top: -10px;
	background-color: white;
	letter-spacing: -0.2px;
`;

const TextContainer = styled.div`
	padding: 0 16px 12px 16px;
	line-height: 1.5;
	font-size: 15px;
	margin: auto 0;
`;

const StyledSpan = styled.span`
	font-family: 'Quicksand', sans-serif;
	font-weight: 600;
	margin: 0;
	padding: 0 5px;
`;

const StyledRating = styled.p`
	font-family: 'Quicksand', sans-serif;

	font-weight: 400;
	margin: 0;
	// border: 1px solid blue;
`;

const StyledCategoryContainer = styled.div`
	// border: 1px solid blue;
	display: flex;
	justify-content: center;
	padding: 10px 0;
`;

const StyledCuisine = styled.p`
	font-family: 'Open Sans', sans-serif;
	border: 1.5px solid #5ab190;
	border-radius: 40px;
	margin: 0px;
	margin-right: 10px;
	padding: 5px 20px;
	font-size: 16px;
	font-weight: 600;
`;

const StyledDietary = styled.p`
	font-family: 'Open Sans', sans-serif;
	border: 1.5px solid orange;
	border-radius: 40px;
	margin: 0px;
	padding: 5px 20px;
	font-size: 16px;
	font-weight: 600;
`;

const StyledDetailList = styled.ul`
	// border: 1px solid green;
	list-style: none;
	padding-left: 0;
	margin: 0;
	padding: 0 0 10px 0;
`;

const StyledListItem = styled.li`
	font-family: 'Open Sans', sans-serif;

	padding: 3px 0;
`;
