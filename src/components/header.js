import {NavLink} from 'react-router-dom';
export const Header =() =>{
    return (
           <nav>
            <NavLink to="/home" className="nav-link">Home</NavLink>
            <NavLink to="/done" className="nav-link">Done-Todo</NavLink>
            <NavLink to="/notDone" className="nav-link">NotDone-Todo</NavLink>
           </nav> 
    )
}







