import "./Header.css";

function Header() {
    return(
        <header>
            <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'></link>
            <span className="logo">SVENSSON</span>
            <span className="menuButton">
                <div className="hamburger"></div>
            </span>
        </header>
    )
}

export default Header;
