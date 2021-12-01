import { StyledLink, Container, Div } from './styled';
import { QuestionNavProps } from '../../../common/types';
import ArrowRight from './arrow-right';

const NextQuestion = ({ link }: QuestionNavProps) => {
	return (
		<StyledLink to={link}>
			<Container>
				<Div>
					Next <br />
					question
				</Div>
				<ArrowRight />
			</Container>
		</StyledLink>
	);
};

export default NextQuestion;
