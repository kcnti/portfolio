import React from 'react'
import Navitems from './Navitems';
import { useParams } from 'react-router-dom';

function Navbar(props) {

    const param = useParams();

    const [ isActive, setActive ] = React.useState(param);

    const page = ['Home', 'About', 'Education', 'Certificates', 'Skills', 'Contact'];
    React.useEffect(() => {
        page.forEach(x => {
            if (isActive!==x) {
                document.getElementById(x).classList.remove('active') 
            }
        })
        if (isActive === undefined) {
            document.getElementById('Home').classList.add('active');
        } else {
            try {
                document.getElementById(isActive).classList.add('active');
            } catch (e) {
                console.log(e)
            }
        }
    }, [isActive])

    function changePage (item) {
        setActive(item);
        // console.log(isActive)
    }

    return(
        <nav>
            <ul>
                <i class="far fa-address-card fa-2x"></i>
                <Navitems item="Home" tolink="/" activeNav={changePage} />
                <Navitems item="About" tolink="/about" activeNav={changePage} />
                <Navitems item="Education" tolink="/education" activeNav={changePage} />
                <Navitems item="Certificates" tolink="/certificates" activeNav={changePage} />
                <Navitems item="Skills" tolink="/skills" activeNav={changePage} />
                <Navitems item="Contact" tolink="/contact" activeNav={changePage} />
            </ul>
        </nav>
    );
}

export default Navbar;