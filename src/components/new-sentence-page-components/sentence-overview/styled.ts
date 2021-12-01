import styled from 'styled-components';
import {
	colours,
	fontFamily,
	fontSizes,
	fontWeight,
} from '../../../common/theme';

export const MainParagraph = styled.p`
	font-size: ${fontSizes.large};
	color: ${colours.secondary};
	font-family: ${fontFamily.roboto};
	font-weight: ${fontWeight.bold};
	margin: 0;
	margin-bottom: 0.2rem;
`;

export const Paragraph = styled.p`
	font-size: ${fontSizes.normal};
	color: ${colours.secondary};
	font-family: ${fontFamily.roboto};
	font-weight: ${fontWeight.normal};
	margin: 0;
	margin-right: 0.5rem;
	display: inline;
`;
