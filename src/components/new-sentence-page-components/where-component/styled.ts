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
`;

export const LeftLink = styled.div`
	float: left;
`;

export const RightLink = styled.div`
	float: right;
`;
