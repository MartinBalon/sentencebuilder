import { useLocation } from 'react-router-dom';
import { RootState } from '../../../store';
import { useSelector } from 'react-redux';
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
	const sentenceData = useSelector((state: RootState) => state.sentence);
	const url = useLocation();
	const pathName = url.pathname;
	const pathNameArray = pathName.split('/');

	const who = sentenceData.who;
	const what = sentenceData.what;
	const where = sentenceData.where;
	const when = sentenceData.when;

	return (
		<StyledBottomNavigation>
			<BottomNavLink
				linkTo={`${ADD_SENTENCE_URL}/${WHO_URL}`}
				title={'WHO'}
				active={`${pathNameArray[2]}` === WHO_URL ? true : false}
				status={!who.touched ? 'default' : who.valid ? 'success' : 'error'}
			/>
			<BottomNavLink
				linkTo={`${ADD_SENTENCE_URL}/${WHAT_URL}`}
				title={'WHAT'}
				active={`${pathNameArray[2]}` === WHAT_URL ? true : false}
				status={!what.touched ? 'default' : what.valid ? 'success' : 'error'}
			/>
			<BottomNavLink
				linkTo={`${ADD_SENTENCE_URL}/${WHERE_URL}`}
				title={'WHERE'}
				active={`${pathNameArray[2]}` === WHERE_URL ? true : false}
				status={!where.touched ? 'default' : where.valid ? 'success' : 'error'}
			/>
			<BottomNavLink
				linkTo={`${ADD_SENTENCE_URL}/${WHEN_URL}`}
				title={'WHEN'}
				active={`${pathNameArray[2]}` === WHEN_URL ? true : false}
				status={!when.touched ? 'default' : when.valid ? 'success' : 'error'}
			/>
		</StyledBottomNavigation>
	);
};

export default BottomNavigation;
