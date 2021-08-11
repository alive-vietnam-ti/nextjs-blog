import Head from 'next/head';
import {useRouter, withRouter} from 'next/router';

function ActiveLink({children, href}) {
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.pathname === href ? 'red' : 'black'
  }

  const handleClick = e => {
    e.preventDetaul();
    router.push(href);
  }
}

const UserDetail = ({router}) => {
  console.log(router);
  
  return (
    <>
      <Head>
        <title>User page</title>
      </Head>
      <h1>User detail page: {router.query.id}</h1>
    </>
  )
}

export default withRouter(UserDetail);