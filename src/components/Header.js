function Header () {
  return (
    <header id="masthead" className="site-header">
    <div className="site-branding">
      <h1 className="site-title"><a href="index.html" rel="home">Moschino</a></h1>
      <h2 className="site-description">Minimalist Portfolio HTML Template</h2>
    </div>
    <nav id="site-navigation" className="main-navigation">
    <button className="menu-toggle">Menu</button>
    <a className="skip-link screen-reader-text" href="#content">Skip to content</a>
    <div className="menu-menu-1-container">
      <ul id="menu-menu-1" className="menu">
        <li><a href={null}>Home</a></li>
        <li><a href={null}>About</a></li>
        <li><a href={null}>Shop</a></li>
        <li><a href={null}>Blog</a></li>
        <li><a href={null}>Elements</a></li>
        <li><a href={null}>Contact</a></li>
      </ul>
    </div>
    </nav>
    </header>
  )
}

export default Header;
