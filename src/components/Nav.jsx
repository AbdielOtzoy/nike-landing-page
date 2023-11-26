import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
          <nav className='flex justify-between items-center mas-container'>
              <a href="/">
                  <img 
                      src={headerLogo}
                      width={123}
                      height={29}
                  />
              </a>
              <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
              </ul>
              <div className='lg:hidden'>
                  <img 
                      src={hamburger}
                      width={24}
                      height={24}
                  />
              </div>
        </nav>
    </header>
  )
}

export default Nav