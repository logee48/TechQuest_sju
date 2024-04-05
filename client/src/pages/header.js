import './nav.css'
import { Link } from 'react-router-dom';
import Logo from './image/logo.png'
import ProfilePic from './image/profileicon.png'

function Header() {
  function toggleDropdown() {
    // console.log("works");
    // var dropdown = document.getElementById("profileDropdown");
    // dropdown.classList.toggle("active");
  }
  return (
    // <header className="header">
    //   <div className="logo" style={{}}>
    //     <Link to="/">Medical Research Collaboration Platform</Link>
    //   </div>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/dashboard">Dashboard</Link>
    //       </li>
    //       <li>
    //         <Link to="/projects">Projects</Link>
    //       </li>
    //       <li>
    //         <Link to="/collaborators">Collaborators</Link>
    //       </li>
    //       <li>
    //         <Link to="/resources">Resources</Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>

    <nav class="navbar">
        <ul class="navbar-nav">
        <ul class = "navleft"> <Link to={"/main"}><img src={Logo} alt="Logo" class="navbar-logo"/> </Link></ul>
          <li class="nav-item" style={{position:"relative",top:"10px"}}><a href="#"><b>Search</b></a></li>
          <Link to={"/upload"}><li class="nav-item" style={{position:"relative",top:"10px"}}><a href="#"><b>Upload</b></a></li></Link>
           <li class="nav-item dropdown" id="profileDropdown">
            <Link to={"/profile"}><img src={ProfilePic} alt="Profile Icon" class = "pf1" onClick={toggleDropdown()}/></Link>
            
          </li>
        </ul>
      </nav>
  );
}

export default Header;



