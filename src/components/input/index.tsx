import { TextInputProps } from '../../common/types';
import { Label, Input } from './styled';

const TextInput = ({ title, name }: TextInputProps) => {
	return (
		<div>
			<Label htmlFor={name}>{title}</Label>
			<Input type='text' name={name} id={name} />
		</div>
	);
};

export default TextInput;
