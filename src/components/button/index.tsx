import { ButtonProps } from '../../common/types';
import { StyledButton } from './styled';

const Button = ({ title }: ButtonProps) => {
	return <StyledButton>{title}</StyledButton>;
};

export default Button;
