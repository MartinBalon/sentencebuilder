import { Outlet } from 'react-router';
import { Main, Divider, Section, Footer } from './styled';
import Button from '../../components/button';
import BottomNavigation from '../../components/new-sentence-page-components/bottom-navigation';
import SentenceOverview from '../../components/new-sentence-page-components/sentence-overview';

const NewSentence = () => {
	return (
		<>
			<Main>
				<Outlet />
				<Divider />
				<SentenceOverview />
				<Section>
					<Button type='delete' title='DELETE' />
					<Button type='save' title='SAVE' />
				</Section>
			</Main>
			<Footer>
				<BottomNavigation />
			</Footer>
		</>
	);
};

export default NewSentence;
