import React from "react";
import { Link, useForm } from '@inertiajs/react';
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Edit = (props) => {
    const {strategy} = props;
    const {kinds} = props;
    const {data, setData, put} = useForm({
        name: strategy.name,
        text: strategy.text,
        url: strategy.url,
        kind_name:strategy.kind.name
    })
    
    //console.log(props)

    const handleSendStrategies = (e) => {
        e.preventDefault();
        put(`/home/strategy/${strategy.id}`);
    }
    //console.log(kinds);
    console.log(strategy)
    
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit
                </h2>
            }>
            
            <div className="p-12 flex flex-col flex items-center flex flex-col">
                <form onSubmit={handleSendStrategies} class="flex flex-col flex items-center">
                    <div classname="flex flex-col flex items-center">
                        <h2>name</h2>
                        <input type="text" placeholder="Input a title." value={data.name} onChange={(e) => setData("name", e.target.value)}/>
                        <span className="text-red-600">{props.errors.name}</span>
                            
                        <h2>text</h2>
                        <textarea placeholder="Input a text." value={data.text} onChange={(e) => setData("text", e.target.value)}></textarea>
                        <span className="text-red-600">{props.errors.text}</span>
                        
                        <h2>url</h2>
                        <textarea placeholder="Input a url." value={data.url} onChange={(e) => setData("url", e.target.value)}></textarea>
                        <span className="text-red-600">{props.errors.url}</span>
                        
                         <p class="mb-4">old kind:{ strategy.kind.name }</p>
                        
                        
                        <h2>new kind</h2>
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

export default Edit;
