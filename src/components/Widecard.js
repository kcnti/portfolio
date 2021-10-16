function Widecard(props) {
    const { title, where, from, to } = props
    return(
        <div className="widecard">
            <div className="wide-con">
                <h3>{title}</h3>
                <h4 className="secondtext">{where}</h4>
                <h4 className="secondtext">{from} - {to}</h4>
            </div>
        </div>
    );
}

export default Widecard;