import { supabase } from "../supabaseClient";
import { useEffect, useRef, useState } from 'react'
import Message from "./Message";
import SendMessage from "./SendMessage";
import Header from "./Header";

//import {useChatScroll} from "../hooks/useChatScroll"
const Messages = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();
    //const ref = useChatScroll(messages)

    const callSupabase = async () => {
        const {data} = await supabase.from('messages').select('*')
        setMessages(data);
    }
    useEffect( () =>{
        callSupabase()
    }, [])
    
    useEffect(() => {
        const channel = supabase
            .channel("*")
            .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages" },
            (payload) => {
                const newMessage = payload.new;
                setMessages(messages => [...messages, newMessage]);
            })
            .subscribe();
            
            return () => supabase.removeChannel(channel);
    }, [])

    return (
        <section className='messages'>
            <Header />
            <div className="content">
            {
                messages && 
                messages.map((item, index) => (
                    <Message key={index} 
                        message={item.content} 
                        date={item.created_at} 
                        email={item.email}/>
                ))
            }
            </div>
            
            <br />
            <SendMessage scroll={scroll}/>
            <span ref={scroll}></span>
        </section>
    );
}
 
export default Messages;