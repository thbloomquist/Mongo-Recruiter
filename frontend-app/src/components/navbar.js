import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout Buddy</h1>
                </Link>
            </div>
        </header>
    )
}
// TODO: Implement Searchbar
// TODO: Implement Mass Creation (need example LinkedIn .csv file to see formatting)
export default Navbar