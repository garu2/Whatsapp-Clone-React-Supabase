import { formatDate } from "../helpers/formatDate";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const Message = ({message, date, email}) => {
    const [user, setUser] = useState("")
    //console.log('email: ', email);

    const getSeccion = async () => {
        const {data} = await supabase.auth.getSession();
        //console.log('secionMesage: ', data.session.user.email);
        setUser(data.session.user.email);
    }
    useEffect( () =>{
        getSeccion()
    }, [])
    return (
        <div className={`card ${user===email?"me":""}`}>
            <p>{message}</p>
            <span>{formatDate(date)}</span>
            <span className="user-email">{email.split('@')[0]}</span>
        </div>
    );
}
 
export default Message;