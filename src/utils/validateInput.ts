import { InputDataObject } from '../common/types';

const validateInput = (inputValue: string): InputDataObject => {
	const value = inputValue;

	if (value.length === 0) {
		return {
			value: value,
			touched: true,
			valid: false,
			errorMessage: 'This field cannot be empty.',
		};
	}

	if (!isNaN(+value)) {
		return {
			value: value,
			touched: true,
			valid: false,
			errorMessage:
				'Only letters are allowed. If you wish to specify time do not forget to add a preposition.',
		};
	}

	if (value.trim().length > 0 && value.trim().length < 2) {
		return {
			value: value,
			touched: true,
			valid: false,
			errorMessage: 'Minimum 2 characters.',
		};
	}

	if (value.length > 30) {
		return {
			value: value,
			touched: true,
			valid: false,
			errorMessage: 'Maximum 30 characters allowed.',
		};
	}

	return {
		value: value,
		touched: true,
		valid: true,
		errorMessage: '',
	};
};

export default validateInput;
