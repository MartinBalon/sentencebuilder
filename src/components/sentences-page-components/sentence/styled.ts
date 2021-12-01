import styled from 'styled-components';
import {
	colours,
	fontFamily,
	fontSizes,
	fontWeight,
} from '../../../common/theme';
import { SentenceSectionProps } from '../../../common/types';

export const ListItem = styled.li<SentenceSectionProps>`
	background: ${(props) =>
		props.even ? colours.darkPrimay : colours.secondary};
	padding: 0.4rem;
	display: flex;
	align-items: center;
`;

export const Paragraph = styled.p<SentenceSectionProps>`
	color: ${(props) => (props.even ? colours.secondary : colours.primary)};
	font-family: ${fontFamily.roboto};
	font-size: ${fontSizes.small};
	font-weight: ${fontWeight.bold};
	margin: 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	flex-grow: 2;
`;
