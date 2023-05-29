import { Avatar, Box, Button, Container, Grid, Typography } from "@mui/material"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export default function CardPost(props) {
  const { username = "undefined", title, body, avatar, id } = props

  const handleReadMore = (e) => {
    console.log(e.target.value)
  }

  return (
    // <Box display="flex" flexDirection="row">
    <Grid item xs={12} sm={6}>
      <Container spacing={2} sx={{ border: "1px solid grey", paddingTop: 2 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar>{avatar}</Avatar>
          <Typography marginLeft={2}>{username}</Typography>
        </Box>
        {/* <img src="https://source.unsplash.com/random" alt="X" width="100%" /> */}
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body1">{body}</Typography>
        <Box display="flex" justifyContent="flex-end">
          <Button
            LinkComponent={Link}
            to={`detail/${id}`}
            onClick={(e) => handleReadMore(e)}
            value={id}
          >
            Read More
          </Button>
        </Box>
      </Container>
    </Grid>
    // </Box>
  )
}

CardPost.propTypes = {
  username: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  avatar: PropTypes.string,
  id: PropTypes.string,
}
