import styled from 'styled-components';
import { colours } from './common/theme';

export const Wrapper = styled.div`
	background: ${colours.primary};
	letter-spacing: 0.0312em;
	line-height: normal;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	width: 100%;
	@media (min-width: 48em) {
		min-height: 0;
		height: 36rem;
		width: 40rem;
		margin: 0 auto;
		margin-top: 5rem;
		box-shadow: 0px 5px 15px 4px rgba(0, 0, 0, 0.4);
	}
	@media (min-width: 120em) {
		margin-top: 10rem;
	}
`;
