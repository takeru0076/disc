import React from "react";
import { Link, useForm } from '@inertiajs/react';
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Create = (props) => {
    // postを追加
    const {data, setData, post} = useForm({
        name: ""
    })
    
    // 送信用関数を追加
    const handleSendKinds = (e) => {
        e.preventDefault();
        post("/home/kind");
    }

    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create
                </h2>
            }>
            
            <div className="p-12 flex flex-col flex items-center flex flex-col">
                
                {/* onSubmitを追記し、送信用関数を設定 */}
                <form onSubmit={handleSendKinds}>
                    <div class="flex flex-col flex items-center">
                        <h2>name</h2>
                        <input type="text" placeholder="name" onChange={(e) => setData("name", e.target.value)}/>
                        <span className="text-red-600">{props.errors.name}</span>
                    </div>                    
                                    
                    <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md my-2.5">send</button>
                </form>
                
                <Link href="/home/kind">戻る</Link>
            </div>
            
        </Authenticated>
        );
}

export default Create;