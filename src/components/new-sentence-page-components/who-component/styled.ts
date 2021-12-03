import styled from 'styled-components';

export const Section = styled.section``;

export const LinksContainer = styled.div`
	margin-top: 1rem;
	margin-bottom: 2rem;
	&:after {
		clear: both;
		content: '';
		display: table;
	}
	@media (min-width: 48em) {
		&:after {
			display: none;
		}
	}
`;

export const RightLink = styled.div`
	float: right;
	@media (min-width: 48em) {
		margin-top: 0.6875rem;
	}
`;
