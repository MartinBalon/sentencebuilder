import { Image } from './styled';
import ErrorLogo from './assets/errorLogo.svg';

const ErrorIndicator = () => {
	return <Image src={ErrorLogo} alt='error logo' />;
};

export default ErrorIndicator;
