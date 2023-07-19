import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/react';

const Show = (props) => {
    const { other } = props; 

    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Other
                </h2>
            }>
            
            <div className="p-12 flex flex-col flex items-center flex flex-col">
                <div class="flex flex-col flex items-center">
                    <h1>{ other.title }</h1>
                    
                    <div>
                        <h3>本文</h3>
                        <p>{ other.text }</p>
                    </div>
                    
                    <div>
                        <h3></h3>
                        <Link href={`${other.url}`}>url</Link>
                    </div>
                    
                    <div>
                        <Link href={`/home/other/${other.id}/edit`}>編集</Link>
                    </div>
                    
                    <div>
                        <Link href="/home/other/">戻る</Link>
                    </div>
                </div>
            </div>
            
        </Authenticated>
        );
}

export default Show;