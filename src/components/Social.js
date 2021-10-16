import { Link } from 'react-router-dom';

function Social() {
    return(
        <div className="social">
            <Link to="#" target="_blank" rel="noopender norefferer"><i class="fab fa-github"></i></Link>
            <Link to="#" target="_blank" rel="noopender norefferer"><i class="fab fa-instagram"></i></Link>
            <Link to="#" target="_blank" rel="noopender norefferer"><i class="fab fa-facebook"></i></Link>
        </div>
    );
}

export default Social;