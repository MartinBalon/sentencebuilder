import HeaderNavLink from '../navLink';
import { StyledHeader } from './styled';

const Header = () => {
	return (
		<StyledHeader>
			<HeaderNavLink linkTo={'/'} title={'ALL SENTENCES'} />
			<HeaderNavLink linkTo={'/add-new-sentence'} title={'ADD SENTENCE'} />
		</StyledHeader>
	);
};

export default Header;
