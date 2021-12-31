import Headshot from '../elements/Headshot.jpg';

const Home = () => {
    return (
        <header className = 'header'>
            <h1 style = {HeadingStyle}>Matthew Flippen</h1>
            <img src={Headshot} alt="Headshot" />
        </header>
    )
}

const HeadingStyle = {
    color: 'black', backgroundColor: 'gray'
}

export default Home;