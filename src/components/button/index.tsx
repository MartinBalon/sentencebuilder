import { ButtonProps } from '../../common/types';
import { StyledButton } from './styled';

const Button = ({ title, type, disabled, onClick }: ButtonProps) => {
	return (
		<StyledButton
			buttonType={type}
			disabled={disabled}
			onClick={() => onClick()}
		>
			{title}
		</StyledButton>
	);
};

export default Button;
