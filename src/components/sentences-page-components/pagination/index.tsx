import { Div, Section } from './styled';
import { PaginationProps } from '../../../common/types';

const Pagination = ({ pages, activePage, onChangePage }: PaginationProps) => {
	const paginationArray: JSX.Element[] = [];

	for (let i = 1; i <= pages; i++) {
		paginationArray.push(
			<Div
				key={i}
				onClick={() => onChangePage(i)}
				active={activePage === i ? true : false}
			>
				{i}
			</Div>
		);
	}

	return <Section>{paginationArray}</Section>;
};

export default Pagination;
