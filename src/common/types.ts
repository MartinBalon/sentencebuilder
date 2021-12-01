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
};

export type StyledButtonProps = {
	buttonType: string;
};

export type SentenceSectionProps = {
	even: boolean;
};

export type QuestionNavProps = {
	link: string;
};

export type TextInputProps = {
	title: string;
	name: string;
};

export type CorrectSentenceIndicatorProps = {
	success: boolean;
};
