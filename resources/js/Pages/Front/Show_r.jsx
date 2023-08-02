import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/react';

const Show = (props) => {
    const { rule } = props; 

    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Rule
                </h2>
            }>
            
            <div className="p-12 flex flex-col flex items-center flex flex-col">
                <div classname="flex flex-col flex items-center">
                    <h1>title:{ rule.title }</h1>
                    
                    <div>
                        <p>text:{ rule.text }</p>
                    </div>
                    
                    <div>
                        <h3></h3>
                        <Link href={`${rule.url}`}>url</Link>
                    </div>
                    
                    <br></br>
                    
                    <div>
                        <Link href={`/home/rule/${rule.id}/edit`} className="custom-button text-xl mb-4">edit</Link>
                    </div>
                    
                    <br></br>
                    
                    <div>
                        <Link href="/home/rule/" className="custom-button text-xl mb-4">back</Link>
                    </div>
                </div>
            </div>
            
        </Authenticated>
        );
}

export default Show;