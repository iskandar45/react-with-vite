import { Typography, Link, IconButton } from "@mui/material"
import { Facebook, Twitter, Instagram } from "@mui/icons-material"

const footerStyle = {
  backgroundColor: "#3f51b5",
  color: "#fff",
  padding: "16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}

const iconButtonStyle = {
  color: "#fff",
  marginLeft: "8px",
}

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Typography>
        Website dibuat dengan <strong>React</strong>
      </Typography>
      <Typography>
        &copy; {new Date().getFullYear()}{" "}
        <Link
          href="https://www.github.com/iskandar45"
          sx={{ color: "#fff", fontWeight: "bold" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Iskandar45
        </Link>
        . Hak Cipta Dilindungi.
      </Typography>
      <div>
        <IconButton
          component={Link}
          href="https://www.facebook.com/ibo5000"
          target="_blank"
          rel="noopener noreferrer"
          style={iconButtonStyle}
        >
          <Facebook />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={iconButtonStyle}
        >
          <Twitter />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.instagram.com/remotegg"
          target="_blank"
          rel="noopener noreferrer"
          style={iconButtonStyle}
        >
          <Instagram />
        </IconButton>
      </div>
    </footer>
  )
}

export default Footer
