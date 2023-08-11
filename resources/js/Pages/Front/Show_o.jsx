import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from '@inertiajs/react';

const Show = (props) => {
    const { other } = props; 

    return (
        <Authenticated auth={props.auth} header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Other
            </h2>
        }>
        
        <Head title="Show_other" />
        
        <div className="p-12 flex flex-col items-center">
            <div className="flex flex-col items-center">
                <h1>title:{ other.title }</h1>
                
                <div>
                    <p>text:{ other.text }</p>
                </div>
                
                {other.url && (
                    <div>
                        <h3></h3>
                        <a href={other.url} className="no-underline">url</a>
                    </div>
                )}
                
                <br></br>
                
                <div>
                    <Link href={`/home/other/${other.id}/edit`} className="custom-button text-xl mb-4">edit</Link>
                </div>
                
                <br></br>
                
                <div>
                    <Link href="/home/other/" className="custom-button text-xl mb-4">back</Link>
                </div>
            </div>
        </div>
        
    </Authenticated>
    );
}

export default Show;
