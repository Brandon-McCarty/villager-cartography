import './Header.css'
import { CardHeader } from '@material-ui/core';

function Header({pageTitle}) {
  return (
    <div className='header'>
        <h1 className='title'>{pageTitle}</h1>
       
    </div>
  )
}

export default Header;