import React from 'react';
import { Card } from 'react-bootstrap';
import { getPosts } from '../../lib/posts'
import Link from 'next/link'

const Posts: React.FC = ({ posts }) => {
  return (
    <div className="container">
      {posts.map(post => (
        <Card key={post.id} className='my-5 shadow'>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Title>{post.body}</Card.Title>
            <Link href={`/posts/${post.id}`} passHref>
              <Card.Link>See more</Card.Link>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: { posts }
  }
}

export default Posts;