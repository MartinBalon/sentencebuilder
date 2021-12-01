import styled from 'styled-components';
import {
	borderRadius,
	colours,
	fontSizes,
	fontWeight,
} from '../../common/theme';
import { StyledButtonProps } from '../../common/types';

export const StyledButton = styled.button<StyledButtonProps>`
	border: none;
	font-size: ${fontSizes.large};
	font-weight: ${fontWeight.bold};
	text-align: center;
	width: 7rem;
	margin: 0 0.4rem;
	padding: 0.4rem 1rem;
	border-radius: ${borderRadius.basic};
	color: ${colours.secondary};
	background: ${(props) =>
		props.buttonType === 'delete' ? colours.detail : colours.success};
	background: ${(props) => (props.disabled ? colours.lightPrimary : null)};
	cursor: pointer;
	line-height: ${fontSizes.large};
`;
