import './Header.css'
import { useHistory } from 'react-router-dom'

function Header({ pageTitle }) {

  const history = useHistory();

  return (
    <div className='header'>
      <h2>Villager Cartography</h2>
      <h1 className='title'>{pageTitle}</h1>

    </div>
  )
}

export default Header;