import React from 'react'
import './header.css'
import Shopping_cart from '../shopping_cart/Shopping_cart'
interface pagina_type{
 pagina:string,
}
const Header = ({pagina}:pagina_type) => {
  return (
    <header>
      <span className='pagina'>{pagina}</span>
      <span className='Shopping_cart_icon'><Shopping_cart /></span>
      
    </header>
  )
}

export default Header