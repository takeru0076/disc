import React from "react";
import { Link, useForm } from '@inertiajs/react';
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Create = (props) => {
    // postを追加
    const {data, setData, post} = useForm({
        name: "",
        text: ""
    })
    
    // 送信用関数を追加
    const handleSendStrategies = (e) => {
        e.preventDefault();
        post("/home/strategy");
    }

    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create
                </h2>
            }>
            
            <div className="p-12">
                
                {/* onSubmitを追記し、送信用関数を設定 */}
                <form onSubmit={handleSendStrategies}>
                    <div>
                        <h2>name</h2>
                        <input type="text" placeholder="タイトル" onChange={(e) => setData("name", e.target.value)}/>
                        <span className="text-red-600">{props.errors.name}</span>
                    </div>                    
                                    
                    <div>
                        <h2>text</h2>
                        <textarea placeholder="今日も1日お疲れさまでした。" onChange={(e) => setData("text", e.target.value)}></textarea>
                        <span className="text-red-600">{props.errors.text}</span>
                    </div>
                                    
                    <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">send</button>
                </form>
                
                <Link href="/home/strategy">戻る</Link>
            </div>
            
        </Authenticated>
        );
}

export default Create;