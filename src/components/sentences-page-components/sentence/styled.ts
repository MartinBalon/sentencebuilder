import styled from 'styled-components';
import {
	borderRadius,
	colours,
	fontFamily,
	fontSizes,
	fontWeight,
} from '../../../common/theme';

export const ListItem = styled.li`
	background: ${colours.darkPrimay};
	color: ${colours.secondary};
	padding: 0.4rem;
	margin-bottom: 0.5rem;
	display: flex;
	align-items: center;
	&:nth-child(even) {
		background: ${colours.secondary};
		color: ${colours.primary};
	}
`;

export const Paragraph = styled.p`
	font-family: ${fontFamily.roboto};
	font-size: ${fontSizes.small};
	font-weight: ${fontWeight.bold};
	margin: 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	flex-basis: calc(100% - 4rem);
`;

export const SentenceDetailWrapper = styled.div`
	position: fixed;
	z-index: 999;
	background: rgba(30, 30, 30, 0.9);
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	@media (min-width: 48em) {
		position: absolute;
		height: 36rem;
		width: 40rem;
		left: 50%;
		margin-left: -20rem;
		margin-top: 5rem;
	}
	@media (min-width: 120em) {
		margin-top: 10rem;
	}
`;

export const SentenceDetail = styled.div`
	position: absolute;
	background: ${colours.primary};
	top: 20vh;
	left: 5vw;
	width: 90vw;
	height: 45vh;
	padding: 1rem;
	border-radius: ${borderRadius.basic};
	box-shadow: 0px 5px 10px 5px rgba(10, 10, 10, 0.9);
	@media (min-width: 48em) {
		top: 50%;
		left: 50%;
		margin-top: -6rem;
		margin-left: -15rem;
		width: 30rem;
		height: 12rem;
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	background: none;
	border: 2px solid ${colours.secondary};
	border-radius: ${borderRadius.basic};
	color: ${colours.secondary};
	font-family: ${fontFamily.roboto};
	font-size: ${fontSizes.small};
	font-weight: ${fontWeight.bold};
	padding: 0.2rem 1rem;
	width: 5rem;
	bottom: 10%;
	left: 50%;
	margin-left: -2.5rem;
	cursor: pointer;
	&:hover {
		border: 2px solid ${colours.detail};
		color: ${colours.detail};
	}
`;

export const SentenceParagraph = styled.p`
	color: ${colours.secondary};
	font-family: ${fontFamily.roboto};
	font-size: ${fontSizes.normal};
	font-weight: ${fontWeight.bold};
	margin: 0;
	margin-bottom: 0.2rem;
`;

export const DateParagraph = styled.p`
	color: ${colours.lightPrimary};
	font-family: ${fontFamily.roboto};
	font-size: ${fontSizes.extraSmall};
	margin: 0;
`;
