import SortBy from '../../components/sentences-page-components/sort-by';
import SentencesList from '../../components/sentences-page-components/sentences-list';
import Pagination from '../../components/sentences-page-components/pagination';
import { Main } from './styled';

const Sentences = () => {
	return (
		<Main>
			<SortBy />
			<SentencesList />
			<Pagination />
		</Main>
	);
};

export default Sentences;
