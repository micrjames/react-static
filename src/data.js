import { FaReact } from "react-icons/fa";

const site_icon = {
    which: <FaReact /> ,
    style: "site-icon",
    path: "/"
};
const hdrText = [
   {id: 1, text: 'React Facts', style: 'hdr-site-text'},
   {id: 2, text: 'React Course - Project 1', style: 'hdr-side-text'},
];
const homeText = {
    title: "React Facts",
    hdr: "Fun facts about React",
    text: [
	    { id: 1, item: "Was first released in 2013" },
	    { id: 2, item: "Was originally created by Jordan Walked" },
	    { id: 3, item: "Has well over 100K stars on GitHub" },
	    { id: 4, item: "Is maintained by Facebook" },
	    { id: 5, item: "Powers thousands of enterprise apps, including mobile apps" }
	]
};

export { site_icon, hdrText, homeText };
