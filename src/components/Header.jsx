import { logo } from "../assets"
import { nav } from "../constant"
import Button from "./Button"

const Header = () => {
  return (
   <header className='w-full py-10'>
    <div className='content flex items-center gap-7'>
      <div className="w-[200px] h-auto">
        <a href="#">
          <img src={logo} alt="logo" className="w-full h-auto"/>
        </a>
      </div>
      <nav className="mx-auto px-4">
        <ul className="text-lg font-lexend font-medium flex items-center justify-center gap-4 ">
          {nav.map((navs) => (
            <li key={navs.id}>
              <a href={navs.link} className="hover:text-primary hover:underline transition-all duration-300 py-2 block">{navs.text}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center justify-center content-start gap-4">
        <Button children="login"/>
        <Button children="sign up" className="bg-white !text-black"/>
      </div>
    </div>
   </header>
  )
}

export default Header