import Axios from "axios";
import { useEffect } from "react";
function EmployeeDetails()
{

    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status === 200)
            {
                console.log(res);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err))
    },[])
    
    return(
        <div>

        </div>
    )
}