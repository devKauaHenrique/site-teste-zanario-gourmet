import Logo from '../../img/logo-zanario-gourmet.png';

import { Link } from 'react-router-dom';

import { MdOutlineShoppingCart } from 'react-icons/md';

import './header.css';

function Header(){
    return(
        <header className="w-full h-20 bg-principal z-50 fixed top-0 flex justify-between items-center px-4 md:px-20 md:h-24">
            <div>
               <Link to='/'><img className='w-20 h-20 md:w-24 md:h-24' src={Logo}/></Link>
            </div>
            <div className='flex'>
                <ul className='flex gap-3 md:gap-8 text-white text-lg md:text-xl font-medium items-center font-poppins'>
                    <li>
                        <Link to='/'>Início</Link>
                    </li>
                    <li>
                        <a href='#'>Quem somos</a>
                    </li>
                    <li>
                        <a href='#'>Cardápio</a>
                    </li>
                    <li className='text-2xl'>
                        <MdOutlineShoppingCart/>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;