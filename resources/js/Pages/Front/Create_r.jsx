import React from "react";
import { Link, useForm } from '@inertiajs/react';
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Create = (props) => {
    // postを追加
    const {data, setData, post} = useForm({
        name: "",
        text: "",
        url:""
    })
    
    // 送信用関数を追加
    const handleSendRules = (e) => {
        e.preventDefault();
        post("/home/rule");
    }

    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create
                </h2>
            }>
            
            <div className="p-12">
                
                {/* onSubmitを追記し、送信用関数を設定 */}
                <form onSubmit={handleSendRules}>
                    <div>
                        <h2>title</h2>
                        <input type="text" placeholder="タイトル" onChange={(e) => setData("title", e.target.value)}/>
                        <span className="text-red-600">{props.errors.title}</span>
                    </div>                    
                                    
                    <div>
                        <h2>text</h2>
                        <textarea placeholder="今日も1日お疲れさまでした。" onChange={(e) => setData("text", e.target.value)}></textarea>
                        <span className="text-red-600">{props.errors.text}</span>
                    </div>
                    
                    <div>
                        <h2>url</h2>
                        <textarea placeholder="必須ではありません。" onChange={(e) => setData("url", e.target.value)}></textarea>
                    </div>
                                    
                    <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">send</button>
                </form>
                
                <Link href="/home/rule">戻る</Link>
            </div>
            
        </Authenticated>
        );
}

export default Create;