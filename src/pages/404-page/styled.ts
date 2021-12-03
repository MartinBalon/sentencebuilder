import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colours, fontFamily, fontSizes } from '../../common/theme';

export const StyledH1 = styled.h1`
	font-family: ${fontFamily.roboto};
	color: ${colours.secondary};
	font-size: ${fontSizes.extraLarge};
	text-align: center;
	margin: 0;
	margin-top: 4rem;
	margin-bottom: 1rem;
`;

export const StyledLink = styled(Link)`
	font-family: ${fontFamily.roboto};
	color: ${colours.secondary};
	font-size: ${fontSizes.normal};
	text-align: center;
`;
