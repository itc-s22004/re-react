import Hero from 'components/hero'
import Container from 'components/container'

const Home = () => {
  return (
    <Container>
      <Hero
        title="CUBE"
        subtitle="アウトプッとしていくサイト"
        imageOn
      />
    </Container>
  )
}

export default Home