import React, { useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { Menu } from './Menu'
import { MenuCloseIcon } from '@/components/icons/MenuCloseIcon'
import { MenuIcon } from '@/components/icons/MenuIcon'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500',
})

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);


  return (
    <header className={`${roboto.className} flex bg-inherit text-sm py-3 px-5 justify-between items-center sticky top-0 z-20`}>
    <Link href='/'>
      <Image src="/teste.svg" alt="icone da letra M" width={55} height={55}/>
    </Link>
      <button className='p-1 md:hidden' onClick={openMenu}>
       <MenuIcon className='fill-white w-10 h-10' />
      </button>
    <nav className='hidden md:flex items-center gap-10 text-md'>
      <Link href='/'>Sobre Mim</Link>
      <Link href='/contatos'>Entre em Contato</Link>
    </nav>
    <Menu isVisible={menuOpen} onClose={closeMenu} />
    </header>
  )
}

export default Header