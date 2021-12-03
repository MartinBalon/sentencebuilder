import { TextInputProps } from '../../common/types';
import { Label, Input, ErrorSpan, InputContainer } from './styled';

const TextInput = ({ title, name, data, onChange }: TextInputProps) => {
	return (
		<InputContainer>
			<Label htmlFor={name}>{title}</Label>
			<Input
				type='text'
				name={name}
				id={name}
				value={data.value}
				onChange={onChange}
			/>
			{data.errorMessage && <ErrorSpan>{data.errorMessage}</ErrorSpan>}
		</InputContainer>
	);
};

export default TextInput;
