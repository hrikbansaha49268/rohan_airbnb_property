import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="font-semibold font-inter" >
            <ul className='flex justify-between mx-auto container border-b border-black px-16 py-8'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/kyp?section=facilities">Know the facilities</Link></li>
                <li><Link to="/kyp?section=attractions">Nearby tourist attractions</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar; 