import React from "react";
import { Link, useForm } from '@inertiajs/react';
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Edit = (props) => {
    const {other} = props;
    const {data, setData, put} = useForm({
        title: other.title,
        text: other.text,
        url: other.url
    })

    const handleSendOthers = (e) => {
        e.preventDefault();
        put(`/home/other/${other.id}`);
    }

    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit
                </h2>
            }>
            
            <div className="p-12 flex flex-col flex items-center flex flex-col">
                
                <form onSubmit={handleSendOthers}>
                    <div class="flex flex-col flex items-center">
                        <h2>title</h2>
                        <input type="text" placeholder="タイトル" value={data.title} onChange={(e) => setData("title", e.target.value)}/>
                        <span className="text-red-600">{props.errors.title}</span>

                        <h2>text</h2>
                        <textarea placeholder="今日も1日お疲れさまでした。" value={data.text} onChange={(e) => setData("text", e.target.value)}></textarea>
                        <span className="text-red-600">{props.errors.text}</span>

                        <h2>url</h2>
                        <textarea placeholder="今日も1日お疲れさまでした。" value={data.url} onChange={(e) => setData("url", e.target.value)}></textarea>
                        <span className="text-red-600">{props.errors.url}</span>
                    </div>
                    
                    <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">send</button>
                </form>
                
                <Link href="/home/other">戻る</Link>
            </div>
            
        </Authenticated>
        );
}

export default Edit;
