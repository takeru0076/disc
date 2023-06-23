import React from "react";
import { Link, useForm } from '@inertiajs/react';
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Edit = (props) => {
    const {kind} = props;
    const {data, setData, put} = useForm({
        name: kind.name,
    })

    const handleSendKinds = (e) => {
        e.preventDefault();
        put(`/home/kind/${kind.id}`);
    }

    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit
                </h2>
            }>
            
            <div className="p-12">
                
                <form onSubmit={handleSendKinds}>
                    <div>
                        <h2>name</h2>
                        <input type="text" placeholder="name" value={data.name} onChange={(e) => setData("name", e.target.value)}/>
                        <span className="text-red-600">{props.errors.name}</span>
                    </div>                    
                    
                    <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">send</button>
                </form>
                
                <Link href="/home/kind">戻る</Link>
            </div>
            
        </Authenticated>
        );
}

export default Edit;
