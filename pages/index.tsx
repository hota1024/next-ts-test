import { NextPage } from 'next'

type HomeProps = {
  userAgent: string
}

const Home: NextPage<HomeProps> = ({ userAgent }) => (
  <h1>Hello world! - user agent: {userAgent}</h1>
)

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

export default Home
