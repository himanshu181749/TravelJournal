
export default function Card(props){
    return(
        <>
            <div className="card-comp">
            <img src={props.imgUrl} className="coverImage"></img>
            <div className="sections">
                <div className="line1">
                    <h4>{props.nation}</h4>
                    <a href="#">View on Google Maps</a>
                </div>
                <h2>{props.place}</h2>
                <h4>{props.date}</h4>
                <p>{props.bio}</p>
            </div>
            </div>
            <hr/>
        </>
        

    );
}