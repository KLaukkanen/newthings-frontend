import styled from 'styled-components'
import MainView from './views/MainView'

const Container = styled.div`
    width: 100vw;
    margin 0 auto;
    padding: 2rem;
    text-align: center;
`

function App() {
    return (
        <Container>
            <MainView />
        </Container>
    )
}

export default App
