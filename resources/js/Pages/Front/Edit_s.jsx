import React from "react";
import { Link, useForm } from '@inertiajs/react';
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Edit = (props) => {
    const {strategy} = props;
    const {data, setData, put} = useForm({
        name: strategy.name,
        text: strategy.text
    })

    const handleSendStrategies = (e) => {
        e.preventDefault();
        put(`/home/strategy/${strategy.id}`);
    }

    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit
                </h2>
            }>
            
            <div className="p-12">
                
                <form onSubmit={handleSendStrategies}>
                    <div>
                        <h2>name</h2>
                        <input type="text" placeholder="タイトル" value={data.name} onChange={(e) => setData("name", e.target.value)}/>
                        <span className="text-red-600">{props.errors.name}</span>
                    </div>                    
                    
                    <div>
                        <h2>text</h2>
                        <textarea placeholder="今日も1日お疲れさまでした。" value={data.text} onChange={(e) => setData("text", e.target.value)}></textarea>
                        <span className="text-red-600">{props.errors.text}</span>
                    </div>
                    
                    <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">send</button>
                </form>
                
                <Link href="/home/strategy">戻る</Link>
            </div>
            
        </Authenticated>
        );
}

export default Edit;
