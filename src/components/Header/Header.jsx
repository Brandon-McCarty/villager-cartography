import './Header.css'
import { useHistory } from 'react-router-dom'

function Header({ pageTitle }) {

  const history = useHistory();

  const goToAbout = () => {
    history.push('/about')
  }

  return (
    <div className='header'>
      <h2 onClick={goToAbout}>Villager Cartography</h2>
      <h1 className='title'>{pageTitle}</h1>

    </div>
  )
}

export default Header;