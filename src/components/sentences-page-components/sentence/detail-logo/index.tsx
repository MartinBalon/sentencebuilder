import { SentenceSectionProps } from '../../../../common/types';
import DetailLightLogo from '../assets/detailLightLogo.svg';
import DetailDarkLogo from '../assets/detailDarkLogo.svg';
import { Image } from './styled';

const DetailLogo = ({ even }: SentenceSectionProps) => {
	return (
		<>
			{even && <Image src={DetailLightLogo} alt='' />}
			{!even && <Image src={DetailDarkLogo} alt='' />}
		</>
	);
};

export default DetailLogo;
