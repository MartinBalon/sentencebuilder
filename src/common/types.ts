export type HeaderNavLinkProps = {
	linkTo: string;
	title: string;
	active: boolean;
};

export type BottomNavLinkProps = {
	linkTo: string;
	title: string;
	active: boolean;
	status: string;
};

export type ButtonProps = {
	title: string;
	type: string;
	disabled: boolean;
	onClick: any;
};

export type StyledButtonProps = {
	buttonType: string;
	disabled: boolean;
};

export type SentenceSectionProps = {
	even: boolean;
};

export type QuestionNavProps = {
	link: string;
};

export type InputDataObject = {
	value: string;
	touched: boolean;
	valid: boolean;
	errorMessage: string;
};

export type TextInputProps = {
	title: string;
	name: string;
	data: InputDataObject;
	onChange: any;
};

export type CorrectSentenceIndicatorProps = {
	success: boolean;
};
