import { getPostByID, getPostIds } from "../../lib/posts"

const post = (post) => {
  return (
    <div className="container">
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const paths = await getPostIds();
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const post = await getPostByID(params.id)
  return {
    props: post
  }
}

export default post;