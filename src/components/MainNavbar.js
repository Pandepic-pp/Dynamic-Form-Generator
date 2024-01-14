import './navbar.css';
import logo from './logo.svg';

function MainNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand d-flex pt-2" href="/">
          <img src={logo} alt="" className="navbar-logo" />
          Dynamic Form Generator with React.js
        </a>
      </div>
    </nav>
  );
}

export default MainNavbar;
