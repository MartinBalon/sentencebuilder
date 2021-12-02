import DeleteLogoImg from '../assets/deleteLogo.svg';
import { DeleteLogoProps } from '../../../../common/types';
import { Image } from './styled';

const DeleteLogo = ({ onclick }: DeleteLogoProps) => {
	return (
		<Image src={DeleteLogoImg} alt='delete logo' onClick={() => onclick()} />
	);
};

export default DeleteLogo;
