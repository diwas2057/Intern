const { Link } = require("react-router-dom");
const Navbar = () => {
 return (
 <nav style={{ textAlign: "center", marginTop: "0px", height:"50px", backgroundColor:"#404040", listStyle:"none"}}>
 <Link to="/" style={{ padding: "10px", color:"#FFF"}}>
 Home
 </Link>
 <Link to="/skills" style={{ padding: "10px", color:"#FFF"}}>
Skills
 </Link>
 <Link to="/about" style={{ padding: "10px", color:"#FFF"}}>
 About
 </Link>
 </nav>
 );
};
export default Navbar;
