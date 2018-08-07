import React from 'react'
import styled from 'styled-components';
import PictureChange from './PictureChange.jsx'
const Wrapper = styled.div`
	display: flex;
	width: 100%;
	flex-flow: column wrap;
	justify-content: flex-start;
	align-items: center;
	padding-top: 20px;
	padding-bottom: 20px;
	
`;

const Name = styled.p`
	font-family: 'Pompiere', cursive;
	font-size: 36px;
	margin-bottom: 0em;
`;

const Nickname = styled.p`
	font-family: 'Pompiere', cursive;
	font-size: 20px;
`;

const Information = styled.p`
	margin: auto;
	max-width: 350px;
	width: 350px;
	text-align: center;
`;


const Bio = ({name, nickname, information, nPicture, fPicture}) => (
	<Wrapper>
		<Name> {name} </Name>
		<Nickname> { '"' + nickname + '"'} </Nickname>
		<PictureChange nPicture={nPicture} fPicture={fPicture} />
		<Information> {information}</Information>
	</Wrapper>
)

export default Bio