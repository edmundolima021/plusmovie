import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="plusmovie-nav-content">
                    <h1>PlusMovie</h1>
                    <a href="https://github.com/edmundolima021">
                        <div className="plusmovie-contact-container">
                            <GithubIcon />
                            <p className="plusmovie-contact-link">/edmundolima021</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );

}

export default Navbar;