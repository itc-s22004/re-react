import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'
import { getAllPosts } from 'lib/api'
import { getPlaiceholder } from 'plaiceholder'
import Posts from 'components/posts'
import Pagination from 'components/pagination'

import { eyecatchLocal } from 'lib/constants'

const Home = ({posts}) => {
  return (
    <Container>
      <Meta />
      <Hero
        title="CUBE"
        subtitle="アウトプッとしていくサイト"
        imageOn
      />
      <Posts posts={posts} />
      <Pagination nextUrl='/blog' nextText="More Posts" />
    </Container>
  )
}

export async function getStaticProps() {
    const posts = await getAllPosts(4)
    for (const post of posts) {
        if (!post.hasOwnProperty('eyecatch')) {
            post.eyecatch = eyecatchLocal
        }
        const {base64} = await getPlaiceholder(post.eyecatch.url)
        post.eyecatch.blurDataURL = base64
    }
    console.log(posts)
    return {
        props: {
            posts: posts,
        }
    }
}
export default Home