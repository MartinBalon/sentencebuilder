import { NavLink } from 'react-router-dom';
import { BottomNavLinkProps } from '../../../../common/types';
import {
	colours,
	fontWeight,
	fontSizes,
	fontFamily,
} from '../../../../common/theme';

const HeaderNavLink = ({
	linkTo,
	title,
	active,
	status,
}: BottomNavLinkProps) => {
	const commonLinkStyle = {
		textDecoration: 'none',
		fontWeight: fontWeight.bold,
		color: colours.secondary,
		background: colours.primary,
		borderTop: `4px solid ${colours.lightPrimary}`,
		flexGrow: 1,
		fontSize: fontSizes.large,
		fontFamily: fontFamily.roboto,
		padding: '0.5rem',
	};

	const activeLinkStyle = {
		color: colours.primary,
		background: colours.secondary,
		borderTop: `4px solid ${colours.secondary}`,
	};

	let additionalStyling = {};

	if (status === 'error') {
		additionalStyling = {
			color: colours.error,
			borderTop: `4px solid ${colours.error}`,
		};
	} else if (status === 'success') {
		additionalStyling = {
			color: colours.success,
			borderTop: `4px solid ${colours.success}`,
		};
	}

	return (
		<NavLink
			to={linkTo}
			style={
				active
					? { ...commonLinkStyle, ...activeLinkStyle }
					: { ...commonLinkStyle, ...additionalStyling }
			}
		>
			{title}
		</NavLink>
	);
};

export default HeaderNavLink;
