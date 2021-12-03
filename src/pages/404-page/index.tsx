import { StyledH1, StyledLink } from './styled';

const PageNotFound = () => {
	return (
		<>
			<StyledH1>404 Error: Page not found.</StyledH1>
			<StyledLink to='/'>Go to home page.</StyledLink>
		</>
	);
};

export default PageNotFound;
