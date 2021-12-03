import styled from 'styled-components';
import {
	padding,
	colours,
	borderRadius,
	fontFamily,
	fontSizes,
	fontWeight,
} from '../../common/theme';

export const Main = styled.main`
	padding: ${padding.mobilePadding};
	flex: 1 0 auto;
	@media (min-width: 48em) {
		padding: ${padding.tabletPadding};
	}
`;

export const Divider = styled.div`
	height: 2px;
	background: ${colours.darkPrimay};
	border-radius: ${borderRadius.basic};
	margin: 2rem 0;
`;

export const Section = styled.section`
	display: flex;
	margin-top: 2rem;
	justify-content: center;
`;

export const Footer = styled.footer`
	flex-shrink: 0;
	margin-top: 2rem;
`;

export const ErrorMessage = styled.p`
	color: ${colours.error};
	font-family: ${fontFamily.roboto};
	font-size: ${fontSizes.large};
	font-weight: ${fontWeight.bold};
	text-align: center;
`;

export const SuccessMessage = styled.p`
	color: ${colours.success};
	font-family: ${fontFamily.roboto};
	font-size: ${fontSizes.large};
	font-weight: ${fontWeight.bold};
	text-align: center;
`;
