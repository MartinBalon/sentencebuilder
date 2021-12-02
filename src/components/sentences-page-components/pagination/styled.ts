import styled from 'styled-components';
import {
	colours,
	fontFamily,
	fontSizes,
	fontWeight,
} from '../../../common/theme';
import { DivProps } from '../../../common/types';

export const Section = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Div = styled.div<DivProps>`
	background: ${(props) =>
		props.active ? colours.secondary : colours.primary};
	color: ${(props) => (props.active ? colours.primary : colours.secondary)};
	border: ${`1px solid ${colours.secondary}`};
	font-family: ${fontFamily.roboto};
	font-size: ${fontSizes.normal};
	font-weight: ${fontWeight.bold};
	width: 1.4rem;
	height: 1.4rem;
	margin: 0 0.2rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
