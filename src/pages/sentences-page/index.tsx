import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import SortBy from '../../components/sentences-page-components/sort-by';
import SentencesList from '../../components/sentences-page-components/sentences-list';
import Pagination from '../../components/sentences-page-components/pagination';
import { SENTENCES_TO_SHOW } from '../../constants';
import { Main } from './styled';
import { useEffect, useState } from 'react';
import { current } from '@reduxjs/toolkit';

const Sentences = () => {
	const allSentences = useSelector((state: RootState) => state.sentences);
	const [showPageNumber, setShowPageNumber] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		setTotalPages(Math.ceil(allSentences.length / SENTENCES_TO_SHOW));
	});

	const filteredSentences = allSentences;

	// pagination
	const sentences = filteredSentences.filter((sentence, index) => {
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

	return (
		<Main>
			{allSentences && allSentences.length > 0 && (
				<>
					<SortBy />
					<SentencesList sentences={sentences} />
					<Pagination
						pages={totalPages}
						activePage={currentPage}
						onChangePage={changeCurrentPageHandler}
					/>
				</>
			)}
			{allSentences.length === 0 && 'No sentences found.'}
		</Main>
	);
};

export default Sentences;
