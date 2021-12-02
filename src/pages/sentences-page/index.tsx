import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { SENTENCES_TO_SHOW } from '../../constants';
import { Main, ErrorMessage } from './styled';
import SortBy from '../../components/sentences-page-components/sort-by';
import SentencesList from '../../components/sentences-page-components/sentences-list';
import Pagination from '../../components/sentences-page-components/pagination';
import sortArray from '../../utils/sortArray';
import { Sentence } from '../../common/types';
import { NEWEST } from '../../constants';

const Sentences = () => {
	const allSentences = useSelector((state: RootState) => state.sentences);
	const [totalPages, setTotalPages] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const [sortBy, setSortBy] = useState(NEWEST);
	const [sortedSentences, setSortedSentences] = useState<Sentence[]>([]);

	useEffect(() => {
		setTotalPages(Math.ceil(allSentences.length / SENTENCES_TO_SHOW));
	});

	useEffect(() => {
		setSortedSentences([...sortArray(allSentences, sortBy)]);
	}, [sortBy, allSentences]);

	// pagination
	const sentences = sortedSentences.filter((sentence, index) => {
		if (
			index + 1 <= currentPage * SENTENCES_TO_SHOW &&
			index + 1 > (currentPage - 1) * SENTENCES_TO_SHOW
		) {
			return sentence;
		}
	});

	const changeCurrentPageHandler = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const changeSortByHandler = (changeSortBy: string) => {
		setSortBy(changeSortBy);
	};

	return (
		<Main>
			{sortedSentences && sortedSentences.length > 0 && (
				<>
					<SortBy onChangeSortBy={changeSortByHandler} />
					<SentencesList sentences={sentences} />
					<Pagination
						pages={totalPages}
						activePage={currentPage}
						onChangePage={changeCurrentPageHandler}
					/>
				</>
			)}
			{sortedSentences.length === 0 && (
				<ErrorMessage>No sentences found.</ErrorMessage>
			)}
		</Main>
	);
};

export default Sentences;
