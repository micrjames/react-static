import { SiteIcon, HeaderTxt } from "../";
import './index.scss';

const Header = ({ icon, text }) => {
   	return (
		<header>
			<SiteIcon icon={icon} link />
	   		{text.map(val => (
			   <HeaderTxt key={val.id} text={val.text} style={val.style} />
			))}
		</header>
   	);
};

export default Header;
