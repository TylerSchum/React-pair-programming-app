import React from 'react'
const style = {
  width: "100%",
  height: "40px",
  // marginTop: "5%",
  // position: "absolute",
  // bottom: "0",
  backgroundColor: "#f5f5f5"
}
const Footer = () => {
  return (
    <footer className="footer" style={style}>
      <p className="col-xs-offset-9" style={{paddingTop: "15px"}}>created by <a href="http://github.com/tylerschum">Tyler Schum</a></p>
    </footer>
  )
}

export default Footer;