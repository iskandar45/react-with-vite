import { Box, Container, Grid, Pagination, Stack, Typography } from "@mui/material"
import CardPost from "../components/molecules/CardPost"
import { useEffect, useState } from "react"
import { getPosts, getUserById } from "../services/api"
import { getFirstCharacters } from "../utils/getChar"

export default function Home() {
  const [dataPost, setDataPost] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await getPosts(page)
        const modifiedData = await Promise.all(
          postsData.map(async (post) => {
            const userData = await getUserById(post.userId)
            return {
              ...post,
              username: userData.name,
              avatar: userData.username,
            }
          })
        )
        setDataPost(modifiedData)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching posts:", error)
        setError(error.message)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [page]) // Tambahkan [page] sebagai dependensi useEffect

  const handlePageChange = (event, value) => {
    // setIsLoading(true)
    setPage(value) // Mengubah nilai page sesuai dengan pagination yang diklik
  }

  return (
    <>
      <Container sx={{ marginY: 2 }}>
        <Typography variant="h4">Hot News</Typography>
        <hr />
        {isLoading ? (
          <Typography variant="h4">Loading...</Typography>
        ) : error ? (
          <Typography variant="h4">Error: {error}</Typography>
        ) : (
          <Grid container spacing={2}>
            {dataPost.map((post) => {
              const char = getFirstCharacters(post.avatar)
              return (
                <CardPost
                  key={post.id}
                  username={post.username}
                  avatar={char}
                  body={post.body}
                  title={post.title}
                  id={post.id}
                />
              )
            })}
          </Grid>
        )}

        <Box display="flex" justifyContent="center" marginTop={5}>
          <Stack spacing={2}>
            <Pagination count={10} page={page} onChange={handlePageChange} color="secondary" />
          </Stack>
        </Box>
      </Container>
    </>
  )
}
