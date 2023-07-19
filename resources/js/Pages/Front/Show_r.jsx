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
                    <h1>{ rule.title }</h1>
                    
                    <div>
                        <p>{ rule.text }</p>
                    </div>
                    
                    <div>
                        <h3></h3>
                        <Link href={`${rule.url}`}>url</Link>
                    </div>
                    
                    <div>
                        <Link href={`/home/rule/${rule.id}/edit`}>編集</Link>
                    </div>
                    
                    <div>
                        <Link href="/home/rule/">戻る</Link>
                    </div>
                </div>
            </div>
            
        </Authenticated>
        );
}

export default Show;