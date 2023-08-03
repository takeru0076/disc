import React from "react";
import { Link, useForm } from '@inertiajs/react';
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Create = (props) => {
    // postを追加
    const {kinds} = props;
    const {data, setData, post} = useForm({
        name: "",
        text: "",
        kind_id: kinds[0].id
    })
    
    // 送信用関数を追加
    const handleSendStrategies = (e) => {
        e.preventDefault();
        post("/home/strategy");
    }
    
    console.log(kinds);

    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create
                </h2>
            }>
            
            <div className="p-12 flex flex-col flex items-center flex flex-col">
                
                {/* onSubmitを追記し、送信用関数を設定 */}
                <form onSubmit={handleSendStrategies} class="flex flex-col flex items-center">
                    <div classname="flex flex-col flex items-center">
                        <h2>name</h2>
                        <input type="text" placeholder="Input a name." onChange={(e) => setData("name", e.target.value)}/>
                        <span className="text-red-600">{props.errors.name}</span>
                                    
                        <h2>text</h2>
                        <textarea placeholder="Input a text." onChange={(e) => setData("text", e.target.value)}></textarea>
                        <span className="text-red-600">{props.errors.text}</span>
                        
                        <h2>url</h2>
                        <textarea placeholder="Not required" onChange={(e) => setData("url", e.target.value)}></textarea>
                    
                        <h2>kind</h2>
                        <select onChange={e => setData("kind_id", e.target.value)}>
                        {kinds.map((kind) => (
                            <option value={kind.id}>{kind.name}</option>
                        ))}
                        </select>
                    </div>
                    <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md my-2.5 flex flex-col flex items-center">send</button>
                </form>
                
                <Link href="/home/strategy" className="custom-button text-xl mb-4">back</Link>
            </div>
            
        </Authenticated>
        );
}

export default Create;