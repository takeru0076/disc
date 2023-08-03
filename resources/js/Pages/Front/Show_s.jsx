import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/react';

const Show = (props) => {
    const { strategy } = props; 

    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Strategy
                </h2>
            }>
            
            <div className="p-12 flex flex-col flex items-center flex flex-col">
                <div classname="flex flex-col flex items-center">
                    <h1>title:{ strategy.name }</h1>
                    
                    <div>
                        <p>text:{ strategy.text }</p>
                    </div>
                    
                    <div>
                        <h3></h3>
                        <Link href={`${strategy.url}`} class="no-underline">url</Link>
                    </div>
                    
                    <div>
                        <p class="mb-4">kind name:{ strategy.kind.name }</p>
                    </div>
                    
                    <div>
                        <Link href={`/home/strategy/${strategy.id}/edit`} className="custom-button text-xl mb-4">edit</Link>
                    </div>
                    
                    <br></br>
                    
                    <div>
                        <Link href="/home/strategy/" className="custom-button text-xl mb-4">back</Link>
                    </div>
                </div>
            </div>
            
        </Authenticated>
        );
}

export default Show;