import styled from 'styled-components';
import { padding, colours, borderRadius } from '../../common/theme';

export const Main = styled.main`
	padding: ${padding.mainPadding};
	flex: 1 0 auto;
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
