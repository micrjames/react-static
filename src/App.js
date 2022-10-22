import { site_icon, hdrText, homeText } from "./data";
import { Layout } from "./components";
import { Home, NoMatch } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
	  <>
	  <Routes>
		 <Route path="/" element={<Layout
			   site_icon={site_icon}
			   hdr_text={hdrText}
		 />}>
	        <Route index element={<Home data={homeText} />} />
			<Route path="*" element={<NoMatch />} />
	     </Route>
	  </Routes>
	  </>
  );
}

export default App;
