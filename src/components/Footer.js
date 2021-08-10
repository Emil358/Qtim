const stylesForFooter = {
  fontFamily: 'Herr Von Muellerhoff',
  color: '#ccc',
  fontWeight: 300,
  textAlign: 'center',
  marginBottom: 0,
  marginTop: 0,
  lineHeight: 1.4,
  fontSize: '46px',
}

function Footer () {
  return (
    <footer id="colophon" className="site-footer">
    <div className="container">
      <div className="site-info">
        <h1 style={stylesForFooter}>Moschino</h1>
        <a target="blank" href="https://www.wowthemes.net/">&copy; Moschino - Free HTML Template by WowThemes.net</a>
      </div>
    </div>
    </footer>
  )
}

export default Footer;
