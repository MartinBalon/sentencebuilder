import styled from 'styled-components';
import {
	colours,
	fontFamily,
	fontSizes,
	fontWeight,
} from '../../../common/theme';

export const ListItem = styled.li`
	background: ${colours.darkPrimay};
	color: ${colours.secondary};
	padding: 0.4rem;
	margin-bottom: 0.5rem;
	display: flex;
	align-items: center;
	&:nth-child(even) {
		background: ${colours.secondary};
		color: ${colours.primary};
	}
`;

export const Paragraph = styled.p`
	font-family: ${fontFamily.roboto};
	font-size: ${fontSizes.small};
	font-weight: ${fontWeight.bold};
	margin: 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	flex-basis: calc(100% - 4rem);
`;
