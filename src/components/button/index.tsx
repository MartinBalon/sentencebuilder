import { ButtonProps } from '../../common/types';
import { StyledButton } from './styled';

const Button = ({ title, type }: ButtonProps) => {
	return <StyledButton buttonType={type}>{title}</StyledButton>;
};

export default Button;
