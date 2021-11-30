import styled from 'styled-components';
import {
	colours,
	fontFamily,
	fontSizes,
	fontWeight,
} from '../../../common/theme';

type DivProps = {
	active: boolean;
};

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
	font-size: ${fontSizes.small};
	font-weight: ${fontWeight.bold};
	width: 1.2rem;
	height: 1.2rem;
	text-align: center;
	margin: 0 0.1rem;
`;
