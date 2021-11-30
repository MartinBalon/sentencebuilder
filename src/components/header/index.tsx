import HeaderNavLink from '../navLink';
import { StyledHeader } from './styled';

const Header = () => {
	return (
		<StyledHeader>
			<HeaderNavLink linkTo={'/'} title={'SENTENCES'} />
			<HeaderNavLink linkTo={'/add-new-sentence'} title={'ADD NEW'} />
		</StyledHeader>
	);
};

export default Header;
