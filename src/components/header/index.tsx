import { useLocation } from 'react-router-dom';
import HeaderNavLink from '../navLink';
import { StyledHeader } from './styled';
import { HOME_URL, ADD_SENTENCE_URL, WHO_URL } from '../../constants';

const Header = () => {
	const url = useLocation();
	const pathName = url.pathname;
	const pathNameArray = pathName.split('/');

	return (
		<StyledHeader>
			<HeaderNavLink
				linkTo={HOME_URL}
				title={'ALL SENTENCES'}
				active={`${pathNameArray[1]}/` === HOME_URL ? true : false}
			/>
			<HeaderNavLink
				linkTo={`${ADD_SENTENCE_URL}/${WHO_URL}`}
				title={'ADD SENTENCE'}
				active={`/${pathNameArray[1]}` === ADD_SENTENCE_URL ? true : false}
			/>
		</StyledHeader>
	);
};

export default Header;
