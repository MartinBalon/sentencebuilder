import { DetailLogoProps } from '../../../../common/types';
import DetailLogoSVG from '../assets/detailLogo.svg';
import { Image } from './styled';

const DetailLogo = ({ onclick }: DetailLogoProps) => {
	return (
		<Image src={DetailLogoSVG} alt='detail logo' onClick={() => onclick()} />
	);
};

export default DetailLogo;
