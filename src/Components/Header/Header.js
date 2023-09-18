import keyCoceptsImage from '../../assests/images/key-concepts.png';

function Header(){
    return(
        <header>
            <img src={keyCoceptsImage} alt="Medal badge with a star"/>
            <h1>Key React Concepts</h1>
            <p>Selected key React concepts you should konw about</p>
        </header>
    )
}

export default Header;