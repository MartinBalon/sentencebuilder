import { Label, Select, Section } from './styled';

const SortBy = () => {
	return (
		<Section>
			<Label htmlFor='sortBy'>Sort by:</Label>
			<Select id='sortBy' name='sortBy'>
				<option>Newest</option>
				<option>Oldest</option>
				<option>Longest</option>
				<option>Shortest</option>
			</Select>
		</Section>
	);
};

export default SortBy;
