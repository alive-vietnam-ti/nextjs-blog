import { useRouter, withRouter } from 'next/router';

const UserDetailSettings = ({ router }) => {
  return (
    <>
      <h1>User detail setting page: {router.query.id}</h1>
    </>
  )
}

export default withRouter(UserDetailSettings);