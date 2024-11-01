import Link from 'next/link'
//import {Header} from '../Components/Header'
//import classes from './Header/module.css'
//const pages={href:'/',title:'Home'},{href:'/info',title:'info'},{he}
export default function Header() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/info">Info</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }