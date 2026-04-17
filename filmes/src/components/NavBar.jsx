import { Link} from 'react-router';


function NavBar(){
    return(
        <header className="flex m-auto  justify-around items-center p-5 fixed top-0 left-0 bg-black text-white w-full border-b border-gray-600/90 z-40">
            <Link to='/'>
                <span className="font-tittle text-2xl">Busque<span className="text-purple-600">Serie</span></span>
            </Link>
                <nav>
                    <ul className="flex gap-5">
        
                    <Link to='/proximos'>
                        Em Breve
                    </Link>
                   
                </ul>
            </nav>
        </header>
    )
}

export default NavBar