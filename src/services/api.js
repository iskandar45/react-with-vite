import axios from "axios"

const BASE_URL = "https://jsonplaceholder.typicode.com"

export const getPosts = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`, {
      params: {
        _page: page,
        _limit: 10,
      },
    })
    return response.data
  } catch (error) {
    console.error("Error fetching posts:", error)
    throw error
  }
}
export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${id}`)
    return response.data
  } catch (error) {
    console.error("Error fetching posts:", error)
    throw error
  }
}
