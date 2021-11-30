import { Div, Section } from './styled';

const Pagination = () => {
	return (
		<Section>
			<Div active={true}>1</Div>
			<Div active={false}>2</Div>
		</Section>
	);
};

export default Pagination;
