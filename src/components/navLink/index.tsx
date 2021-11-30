import { NavLink } from 'react-router-dom';
import { HeaderNavLinkProps } from '../../common/types';
import { colours, fontWeight, fontSizes, fontFamily } from '../../common/theme';

const HeaderNavLink = ({ linkTo, title }: HeaderNavLinkProps) => {
	const commonLinkStyle = {
		textDecoration: 'none',
		fontWeight: fontWeight.bold,
		color: colours.detail,
		background: colours.primary,
		border: `2px solid ${colours.detail}`,
		flexGrow: 1,
		fontSize: fontSizes.normal,
		fontFamily: fontFamily.roboto,
		padding: '.6rem 0',
	};

	const activeLinkStyle = {
		color: colours.secondary,
		background: colours.detail,
	};

	return (
		<NavLink
			to={linkTo}
			style={({ isActive }) =>
				isActive
					? { ...commonLinkStyle, ...activeLinkStyle }
					: { ...commonLinkStyle }
			}
		>
			{title}
		</NavLink>
	);
};

export default HeaderNavLink;
