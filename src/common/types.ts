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
	onClick: () => void;
};

export type StyledButtonProps = {
	buttonType: string;
	disabled: boolean;
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
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type CorrectSentenceIndicatorProps = {
	success: boolean;
};

export type Sentence = {
	id: string;
	createdAt: number;
	sentence: string;
};

export type NewSentence = {
	value: string;
	touched: boolean;
	valid: boolean;
	errorMessage: string;
};

export type SentenceListProps = {
	sentences: Sentence[];
};

export type SentenceProps = {
	sentenceData: Sentence;
};

export type PaginationProps = {
	pages: number;
	activePage: number;
	onChangePage: (T: number) => void;
};

export type DivProps = {
	active: boolean;
};

export type SortByProps = {
	onChangeSortBy: (T: string) => void;
};

export type DeleteLogoProps = {
	onclick: () => void;
};

export type DetailLogoProps = {
	onclick: () => void;
};
