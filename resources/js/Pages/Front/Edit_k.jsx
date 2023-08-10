import React from "react";
import { Link, useForm, Head } from '@inertiajs/react';
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
            
            <Head title="Edit_kind" />
            
            <div className="p-12 flex flex-col flex items-center flex flex-col">
                
                <form onSubmit={handleSendKinds} class="flex flex-col flex items-center">
                    <div class="flex flex-col flex items-center">
                        <h2>name</h2>
                        <input type="text" placeholder="name" value={data.name} onChange={(e) => setData("name", e.target.value)}/>
                        <span className="text-red-600">{props.errors.name}</span>
                    </div>                    
                    
                    <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md my-2.5">send</button>
                </form>
                
                <Link href="/home/kind" className="custom-button text-xl mb-4"s>back</Link>
            </div>
            
        </Authenticated>
        );
}

export default Edit;
 