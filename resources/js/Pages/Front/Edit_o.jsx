import React from "react";
import { Link, useForm, Head } from '@inertiajs/react';
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
            
            <Head title="Edit_other" />
            
            <div className="p-12 flex flex-col flex items-center flex flex-col">
                
                <form onSubmit={handleSendOthers} class="flex flex-col flex items-center">
                    <div class="flex flex-col flex items-center">
                        <h2>title</h2>
                        <input type="text" placeholder="Input a title." value={data.title} onChange={(e) => setData("title", e.target.value)}/>
                        <span className="text-red-600">{props.errors.title}</span>

                        <h2>text</h2>
                        <textarea placeholder="Input a text." value={data.text} onChange={(e) => setData("text", e.target.value)}></textarea>
                        <span className="text-red-600">{props.errors.text}</span>

                        <h2>url</h2>
                        <textarea placeholder="Input a url." value={data.url} onChange={(e) => setData("url", e.target.value)}></textarea>
                        <span className="text-red-600">{props.errors.url}</span>
                    </div>
                    
                    <br></br>
                    
                    <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">send</button>
                </form>
                
                <br></br>
                
                <Link href="/home/other" className="custom-button text-xl mb-4">back</Link>
            </div>
            
        </Authenticated>
        );
}

export default Edit;
