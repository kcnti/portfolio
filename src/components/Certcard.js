import "../App.css";

function Certcard(props) {
    const { idx, title, detail, pic } = props;

    console.log(title, detail, pic)

    return(
        <div key={idx} className="certs-details">
            <h4>{title}</h4>
            <p>{detail}</p>
            <img src={pic} alt={title} />
        </div>
    );
}

export default Certcard;