import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledContainer>
      <StyledNav>
        <Link to="/" style={{ textDecoration: "none" }}>
          <StyledLogo>Restaurant Finder</StyledLogo>
        </Link>
        <Github
          href="https://github.com/wondasom/restaurant-finder"
          target="_blank"
        ></Github>
      </StyledNav>
      {/* <StyledHeader>
				Ready to find restaurants in Berlin?
			</StyledHeader> */}
    </StyledContainer>
  );
};

export default Header;

const StyledContainer = styled.div`
  height: 260px;
  background-image: url("https://i.imgur.com/OodqdEi.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-box-shadow: inset 0px 93px 86px 1px rgba(0, 0, 0, 0.53);
  -moz-box-shadow: inset 0px 93px 86px 1px rgba(0, 0, 0, 0.53);
  box-shadow: inset 0px 93px 86px 1px rgba(0, 0, 0, 0.43);
  margin-bottom: 40px;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const StyledLogo = styled.div`
  border: 1px solid transparent;
  border-radius: 50px;
  padding: 10px 30px;
  font-family: "Oleo Script", cursive;
  font-size: 26px;
  font-weight: 700;
  color: white;
  &:hover {
    color: #5ab190;
    transition-timing-function: ease-out;
    -webkit-box-shadow: 24px 20px 42px -46px rgba(0, 0, 0, 0.32);
    -moz-box-shadow: 24px 20px 42px -46px rgba(0, 0, 0, 0.32);
    box-shadow: 24px 20px 42px -46px rgba(0, 0, 0, 0.32);
  }
`;

const Github = styled.a`
  border: 1px solid transparent;
  border-radius: 50px;
  padding: 10px 30px;
  font-family: "Oleo Script", cursive;
  font-size: 26px;
  font-weight: 700;
  color: white;
  &:hover {
    color: #5ab190;
    transition-timing-function: ease-out;
    -webkit-box-shadow: 24px 20px 42px -46px rgba(0, 0, 0, 0.32);
    -moz-box-shadow: 24px 20px 42px -46px rgba(0, 0, 0, 0.32);
    box-shadow: 24px 20px 42px -46px rgba(0, 0, 0, 0.32);
  }
  text-decoration: none;
`;

const StyledHeader = styled.div`
  color: white;
  font-family: "Raleway", sans-serif;
  font-size: 30px;
  font-weight: 600;
  padding: 40px;
`;
