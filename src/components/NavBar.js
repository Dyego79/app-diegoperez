import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <>
      <nav className="header__nav">
        <li>
          <a href="#">PROCESADORES</a>
        </li>
        <li>
          <a href="#">MOTHERBOARDS</a>
        </li>
        <li>
          <a href="#">PC-GAMERS</a>
        </li>
        <li>
          <a href="#">AURICULARES</a>
        </li>
        <li>
          <a href="#">TECLADOS</a>
        </li>
      </nav>
      <CartWidget />
    </>
  );
};
export default NavBar;
