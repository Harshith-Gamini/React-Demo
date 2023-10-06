import {useState} from "react";

function Contact()
{
    const [name,setName] = useState("Harshith");

    const handleClick = () =>(
        setName("Tony")
    )
    return(
        <div>
            <h1>Contact Details</h1>
            <h2>The owner of this page is {name}</h2>
            <button onClick={handleClick}>Change Owner</button>
        </div>
    )
}

export default Contact