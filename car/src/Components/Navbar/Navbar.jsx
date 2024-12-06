
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo"><span className="ev">EV</span>olution</div>
        <ul className="nav-menu">
            <li className='Home'>Home</li>
            <li className='Explore'>Explore</li>
            <li className="About">About</li>
            <li className="nav-contact">Contact</li>
        </ul>
    </div>
  )
}

export default Navbar
