import styled from 'styled-components';
import { colours } from './common/theme';

export const Wrapper = styled.div`
	background: ${colours.primary};
	min-height: 100vh;
	width: 100vw;
	letter-spacing: 0.0312em;
	line-height: normal;
	display: flex;
	flex-direction: column;
`;
