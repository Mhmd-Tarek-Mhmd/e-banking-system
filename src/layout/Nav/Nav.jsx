import React from 'react'
import Navs from './Nav.module.css'
import {Link} from 'react-router-dom'
import { useHref } from 'react-router-dom'
import Register from '../../pages/Register'
function Nav(){
  return(  
<header>
        <div className={Navs.container}>
            <a class={Navs.logo} href="index.html">MaZe Bank</a>
            <div class={Navs.flex}>
                <Link to='/signIn'>Sign in</Link>
                <Link to='/register'>Register</Link>
            </div>
        </div>
    </header>
)
}

export default Nav