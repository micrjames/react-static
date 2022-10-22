import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../';

const Layout = ({ site_icon, hdr_text }) => {
    return (
	   	<>
			<Header icon={site_icon} text={hdr_text} />
	   		<main>
			   <Outlet />
	   		</main>
			<Footer />
	    </>
	);
};

export default Layout;
