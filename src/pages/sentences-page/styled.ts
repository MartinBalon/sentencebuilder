import styled from 'styled-components';
import {
	colours,
	fontFamily,
	fontSizes,
	fontWeight,
	padding,
} from '../../common/theme';

export const Main = styled.main`
	padding: ${padding.mobilePadding};
	@media (min-width: 48em) {
		padding: ${padding.tabletPadding};
	}
`;

export const ErrorMessage = styled.div`
	color: ${colours.secondary};
	font-family: ${fontFamily.roboto};
	font-size: ${fontSizes.large};
	font-weight: ${fontWeight.bold};
	text-align: center;
	margin-top: 2rem;
`;
