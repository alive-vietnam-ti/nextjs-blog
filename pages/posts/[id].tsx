import { getPostByID, getPostIds } from "../../lib/posts"

const post = (post) => {
  console.log(post);

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </div>
  )
}

// export const getStaticPaths = async () => {
//   const paths = await getPostIds();
//   console.log(paths);

//   return {
//     paths,
//     fallback: false
//   }
// }

export const getStaticProps = async ({ params }) => {
  const post = await getPostByID(params.id)
  return {
    props: post
  }
}

export default post;