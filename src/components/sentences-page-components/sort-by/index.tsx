import { Label, Select, Section } from './styled';
import { SortByProps } from '../../../common/types';
import { NEWEST, OLDEST, LONGEST, SHORTEST } from '../../../constants';

const SortBy = ({ onChangeSortBy }: SortByProps) => {
	return (
		<Section>
			<Label htmlFor='sortBy'>Sort by:</Label>
			<Select
				id='sortBy'
				name='sortBy'
				onChange={(event) => onChangeSortBy(event.target.value)}
			>
				<option value={NEWEST}>Newest</option>
				<option value={OLDEST}>Oldest</option>
				<option value={LONGEST}>Longest</option>
				<option value={SHORTEST}>Shortest</option>
			</Select>
		</Section>
	);
};

export default SortBy;
