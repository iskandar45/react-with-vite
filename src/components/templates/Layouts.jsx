import PropTypes from "prop-types"
import Footer from "../organisms/Footer"
import Navbar from "../organisms/Navbar"
import { Card, Container } from "@mui/material"

export default function Layouts({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Container sx={{ flexGrow: 1 }}>
        <Card sx={{ marginY: 3 }}>{children}</Card>
      </Container>
      <Footer />
    </div>
  )
}

Layouts.propTypes = {
  children: PropTypes.node.isRequired,
}
