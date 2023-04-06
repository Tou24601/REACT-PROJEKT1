const Navbar = () => {
  return (
    <nav>
      <div className="container nav">
        <div className="leftNav">moja firma</div>
        <ul className="rightNav">
          <li>
            <a href="#aboutSection" className="rightNavElement" id="about">
              o nas
            </a>
          </li>
          <li>
            <a href="#offerSection" className="rightNavElement" id="offer">
              oferta
            </a>
          </li>
          <li>
            <a href="#footer" className="rightNavElement" id="contact">
              kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
