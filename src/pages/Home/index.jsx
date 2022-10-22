import useTitle from "../../hooks/useTitle";
import "./index.scss";

const Home = ({ data }) => {
    useTitle(data.title);
    return (
	    <section id="home">
	    	<h2>{data.hdr}</h2>
	        <ul>
	           {data.text.map(val => (
					<li key={val.id}>{val.item}</li>	   
			   ))}
	        </ul>
	    </section>
	);
};

export default Home;
