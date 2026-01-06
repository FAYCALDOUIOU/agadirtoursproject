
import "./Navbar.css";

function Navbar() {
    return (
        <>
            <header className="nav">
               
                <div className="nav-left">
                    <a className="logo" href="/">
                        {/* BEST (Vite): put logo in /public and use /logo.png */}
                        <img src="/src/assets/logo.png" alt="Logo" />
                    </a>
                </div>

           
                <div className="nav-center">
                    <ul className="menu">
                        <li className="active"><a href="/">HOME</a></li>
                        <li><a href="/agadir">TO DO IN AGADIR</a></li>
                        <li><a href="/tours">TOURS FROM AGADIR</a></li>
                        <li><a href="/taghazout">TO DO IN TAGHAZOUT</a></li>
                    </ul>
                </div>

            
                <div className="nav-right">
                    <a className="langLink" href="#">🇫🇷 FRENCH</a>
                    <a className="langLink" href="#">🇺🇸 ENGLISH</a>
                </div>
            </header>


        </>
    )
}
export default Navbar