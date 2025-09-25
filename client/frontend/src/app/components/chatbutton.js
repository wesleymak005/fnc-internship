'use client'
import { useState } from "react"
import Image from "next/image";

export default function Chatbutton() {
    const [open, setOpen] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!prompt.trim()) return;

        const userMessage = { text: prompt, sender: "user"};
        setMessages((prev) => [...prev, userMessage]);
        setPrompt("");
        setLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: prompt}), 
            });

            if(!response.ok){
                throw new Error('Network response was not OK');
            }
            const data = await response.json();
            const botMessage = {text: data.text, sender: 'bot'};
            setMessages((prev) => [...prev, botMessage]);

        } catch (error) {   
            console.error('Fetch error:', error);
            setMessages((prev) => [...prev, {text: 'Sorry, something went wrong', sender: 'bot'}]);
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            {open && (
                <div className="fixed bottom-35 right-7 flex h-[500px] w-[400px] shadow-lg rounded dark:text-black">
                    <div className="items-center w-full">

                        <div className="flex justify-evenly items-center bg-blue-100 w-full h-15 rounded-t">
                            <Image
                            src="/robot.svg"
                            alt="robot"
                            width={50}
                            height={50}
                            /> 
                            
                            <div className="font-medium p-[10px] text-xl">Chat Bot</div>

                        <button onClick={() => setOpen(!open)}>
                            <Image
                            src="/down2.svg"
                            alt="down-arrow"
                            className="cursor-pointer"
                            width={40}
                            height={40}
                            /> 
                        </button>
                        </div>
                
                        <div className="w-full h-95 py-[15px] px-[15px] bg-white overflow-y-auto dark:bg-gray-500">
        
                            <div className="flex items-start gap-3">

                            <Image
                                src="/robot.svg"
                                alt="robot"
                                width={35}
                                height={35}
                                className="mt-1"
                            /> 
                            
                                <div className="px-4 py-2 text-sm shadow bg-gray-100 rounded-[20px] dark:bg-gray-200">
                                    Hi, How can I help you today? </div>
                                </div>                   
                                
                                <div className="border-gray-300 p-3 h-[400px]">
                                    
                                    
                                    {messages.map((msg, index) => (
                                        <div
                                        key={index}
                                        className={`my-3 ${msg.sender === "user" ? "text-right" : "text-left"}`}
                                        >
                                            
                                        <span
                                            className={`inline-block px-4 py-2 text-sm shadow rounded-[20px] ${
                                            msg.sender === "user" ? "bg-blue-100" : "bg-gray-100"
                                            }`}
                                        >
                                            {msg.text}
                                        </span>
                                        </div>
                                    ))}
                                    {loading && 
                                    <div className="text-left my-1 text-sm inline-block px-4 py-2 text-sm shadow rounded-[20px] bg-gray-100">
                                        Typing...</div>}
                                    </div>
                                    
 
                        </div>

                        <div className="flex items-center gap-2 p-3 border-t border-gray-200 dark:bg-gray-200 bg-white rounded-b">
                            <form onSubmit={handleSubmit} className="flex w-full ">
                            <input
                                type="text"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="Type your message..."
                                disabled={loading}
                                className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none border-gray-200 dark:border-gray-700"
                            />
                            <button type="submit" 
                            disabled={loading} 
                            className="bg-gray-500 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-600">
                                Send
                            </button>
                            </form>
                        </div>
                    
                    </div>
                    
              </div>
              
            
         )}
            <button onClick={() => setOpen(!open)}>
                <Image
                    src="/chat.svg"
                    alt="chat-button"
                    width={50}
                    height={50}
                    className="fixed bottom-20 right-5 dark:invert mt-[10px] cursor-pointer bg-white rounded-[15px]"
                    priority
                />
            </button>

            

        </div>
    )


}