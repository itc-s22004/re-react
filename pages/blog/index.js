import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'

const About = () => {
    return (
        <Container>
            <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
            <Hero
                title="blog"
                subtitle="blogblgoblgo lg"
            />
        </Container>
    )
}

export default About