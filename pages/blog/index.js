import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'
import {getAllPosts} from 'lib/api'
import Posts from 'components/posts'
import { getPlaiceholder } from 'plaiceholder'
import {eyecatchLocal} from 'lib/constants'

const About = ({posts}) => {
    return (
        <Container>
            <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
            <Hero
                title="blog"
                subtitle="About development activities"
            />
            <Posts posts={posts} />
        </Container>
    )
}

export async function getStaticProps() {
    const posts = await getAllPosts()
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

export default About