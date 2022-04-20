import CartWidget from "./CartWidget"
const NavBar = ()=>{
    return(
        <>
        <header>
            <span className="header__logo">EGO TECH</span>
            <nav className="header__nav">
                <li><a href="#">PROCESADORES</a></li>
                <li><a href="#">MOTHERBOARDS</a></li>
                <li><a href="#">PC-GAMERS</a></li>
                <li><a href="#">AURICULARES</a></li>
                <li><a href="#">TECLADOS</a></li>
            </nav>
        <CartWidget/>
        </header>
        </>
    )
}
export default NavBar