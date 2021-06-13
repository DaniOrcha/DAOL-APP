

function Head(props) {
 
    return (

        props.txt.length > 1 ?

            <div className="Shadow">
                <h1>{props.txt[0]}</h1>
                <h2>{props.txt[1]}</h2>
            </div>

            :

            <div className="Shadow">
                <h1>{props.txt[0]}</h1>
            </div>

    )


}



export default Head;
