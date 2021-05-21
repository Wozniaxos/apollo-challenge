import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1 data-testid="home-header">Home Page</h1>
            <Link data-testid="countries-link" to={'/countries'}>Go to Countries</Link>
        </div>
    )
}

export default Home
