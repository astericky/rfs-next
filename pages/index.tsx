import Link from 'next/link'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Header = styled.header`
  color: blue;
  font-family: Arial, Helvetica, sans-serif;
  &:after {
    content: "💅"
  }
`

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Header>Hello styled components!</Header>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
