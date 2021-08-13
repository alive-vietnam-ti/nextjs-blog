import axios from "axios"

export const getPosts = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts?_limit=10'
    )
    return response.data
  } catch (error) {
    console.log(error);
  }
}

export const getPostIds = async () => {
  const posts = await getPosts();
  return posts.map(post => {
    return {
      params: {
        id: `${post.id}`
      }
    }
  })
}

export const getPostByID = async id => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}