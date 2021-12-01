import ErrorIndicator from './error-indicator';
import SuccessIndicator from './success-indicator';
import { CorrectSentenceIndicatorProps } from '../../../../common/types';

const CorrectSentenceIndicator = ({
	success,
}: CorrectSentenceIndicatorProps) => {
	return (
		<>
			{!success && <ErrorIndicator />}
			{success && <SuccessIndicator />}
		</>
	);
};

export default CorrectSentenceIndicator;
