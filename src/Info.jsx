export default function Info(props){
    return(
        <div className="side-info">
            <div className="first-line">
                <h3>{props.nation}</h3>
                <a href="${props.url}"></a>
            </div>
            <h2>{props.name}</h2>
            <h3>{props.date}</h3>
            <p>{props.para}</p>
        </div>
    );
}