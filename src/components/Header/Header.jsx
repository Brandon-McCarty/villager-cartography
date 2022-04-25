import './Header.css'
import { CardHeader } from '@material-ui/core';

function Header({ pageTitle }) {
  return (
    <div className='header'>
      <h2>Villager Cartography</h2>
      <h1 className='title'>{pageTitle}</h1>

    </div>
  )
}

export default Header;