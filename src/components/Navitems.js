import { Link } from 'react-router-dom';

function Navitems(props) {

    const { item, tolink, activeNav } = props;
    // console.log(tolink)

    return(
        <li id={item}>
            {/* <Link to={tolink} onClick={() => activeNav(item)} className={ tolink.includes(currNav.toLowerCase()) ? 'active' : null }>{item}</Link> */}
            <Link to={tolink} onClick={() => {activeNav(item)}}>{item}</Link>
        </li>
    )
}

export default Navitems;