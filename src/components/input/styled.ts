import styled from 'styled-components';
import { colours, fontFamily, fontSizes, fontWeight } from '../../common/theme';

export const Label = styled.label`
	font-size: ${fontSizes.large};
	font-family: ${fontFamily.roboto};
	font-weight: ${fontWeight.bold};
	color: ${colours.secondary};
	display: block;
`;

export const Input = styled.input`
	width: 100%;
	font-size: ${fontSizes.large};
	margin-top: 0.2rem;
	margin-bottom: 0.2rem;
	padding: 0.2rem;
	outline: none;
	border: none;
	border-bottom: 2px solid ${colours.lightPrimary};
	transition: border-bottom 0.4s ease;
	&:focus {
		border: none;
		border-bottom: 2px solid ${colours.detail};
		transition: border-bottom 0.4s ease;
	}
`;

export const ErrorSpan = styled.span`
	color: ${colours.error};
	font-size: ${fontSizes.small};
	font-family: ${fontFamily.roboto};
	position: absolute;
	bottom: -${fontSizes.large};
	left: 0;
`;

export const InputContainer = styled.div`
	position: relative;
	@media (min-width: 48em) {
		width: 50%;
		margin: 0 auto;
	}
`;
