import styled from 'styled-components';
import { colours, fontFamily, fontSizes, fontWeight } from '../../common/theme';

export const Label = styled.label`
	font-size: ${fontSizes.large};
	font-family: ${fontFamily.roboto};
	font-weight: ${fontWeight.bold};
	color: ${colours.secondary};
`;

export const Input = styled.input`
	width: 100%;
	font-size: ${fontSizes.large};
	margin-top: 0.2rem;
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
