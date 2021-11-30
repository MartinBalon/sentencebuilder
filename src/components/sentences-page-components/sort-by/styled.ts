import styled from 'styled-components';
import {
	fontSizes,
	fontFamily,
	colours,
	fontWeight,
	borderRadius,
} from '../../../common/theme';

export const Section = styled.section`
	margin-top: 1rem;
`;

export const Label = styled.label`
	font-size: ${fontSizes.normal};
	font-family: ${fontFamily.roboto};
	font-weight: ${fontWeight.bold};
	color: ${colours.secondary};
	margin-right: 1rem;
`;

export const Select = styled.select`
	font-size: ${fontSizes.normal};
	font-family: ${fontFamily.roboto};
	font-weight: ${fontWeight.bold};
	color: ${colours.primary};
	outline: none;
	padding: 0.05rem 0.5rem;
	border-radius: ${borderRadius.basic};
`;
