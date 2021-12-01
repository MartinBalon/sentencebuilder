import styled from 'styled-components';
import {
	fontSizes,
	fontFamily,
	fontWeight,
	colours,
} from '../../../common/theme';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${colours.lightPrimary};
	font-size: ${fontSizes.normal};
	font-family: ${fontFamily.roboto};
	font-weight: ${fontWeight.bold};
`;

export const Container = styled.div`
	width: 6.2rem;
	display: flex;
`;

export const Div = styled.div`
	margin-right: 0.6rem;
`;
