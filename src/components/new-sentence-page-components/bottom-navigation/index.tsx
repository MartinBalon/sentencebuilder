import { useLocation } from 'react-router-dom';
import BottomNavLink from './bottom-navlink';
import { StyledBottomNavigation } from './styled';
import {
	ADD_SENTENCE_URL,
	WHO_URL,
	WHAT_URL,
	WHEN_URL,
	WHERE_URL,
} from '../../../constants';

const BottomNavigation = () => {
	const url = useLocation();
	const pathName = url.pathname;
	const pathNameArray = pathName.split('/');

	return (
		<StyledBottomNavigation>
			<BottomNavLink
				linkTo={`${ADD_SENTENCE_URL}/${WHO_URL}`}
				title={'WHO'}
				active={`${pathNameArray[2]}` === WHO_URL ? true : false}
				status='default'
			/>
			<BottomNavLink
				linkTo={`${ADD_SENTENCE_URL}/${WHAT_URL}`}
				title={'WHAT'}
				active={`${pathNameArray[2]}` === WHAT_URL ? true : false}
				status='error'
			/>
			<BottomNavLink
				linkTo={`${ADD_SENTENCE_URL}/${WHEN_URL}`}
				title={'WHEN'}
				active={`${pathNameArray[2]}` === WHEN_URL ? true : false}
				status='default'
			/>
			<BottomNavLink
				linkTo={`${ADD_SENTENCE_URL}/${WHERE_URL}`}
				title={'WHERE'}
				active={`${pathNameArray[2]}` === WHERE_URL ? true : false}
				status='success'
			/>
		</StyledBottomNavigation>
	);
};

export default BottomNavigation;
