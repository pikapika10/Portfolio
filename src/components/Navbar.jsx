//import Logo from "../moon2.jpg";
//React fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTablets } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">

          <FontAwesomeIcon icon={faTablets} style={{filter: "",color:"var(--primary-orange)",  paddingLeft: "2em", width:"10rem" }}  />

        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{color:"#fff"}} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item active px-2">
              <a className="nav-link " aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#">
                About Me
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link " aria-current="page" href="#">
                Projects 
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link " aria-current="page" href="#">
                Interests
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link " aria-current="page" href="#">
              Certificates
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link " aria-current="page" href="#">
                Experience
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
