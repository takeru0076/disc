import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from '@inertiajs/react';

const Show = (props) => {
    const { strategy } = props; 
    console.log(strategy);

    return (
        <Authenticated auth={props.auth} header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Strategy
            </h2>
        }>
        
        <Head title="Show_strategy" />
        
        <div className="p-12 flex flex-col items-center">
            <div className="flex flex-col items-center">
                <h1>title:{ strategy.name }</h1>
                
                <div>
                    <p>text:{ strategy.text }</p>
                </div>
                
                {strategy.url && (
                    <div>
                        <h3></h3>
                        <a href={strategy.url} className="no-underline">url</a>
                    </div>
                )}
                
                <div>
                    <p className="mb-4">kind name:{ strategy.kind.name }</p>
                </div>
                
                <div>
                    <Link href={`/home/strategy/${strategy.id}/edit`} className="custom-button text-xl mb-4">edit</Link>
                </div>
                
                <br />
                
                <div>
                    <Link href="/home/strategy" className="custom-button text-xl mb-4">back</Link>
                </div>
            </div>
        </div>
        
    </Authenticated>
    );
}

export default Show;
