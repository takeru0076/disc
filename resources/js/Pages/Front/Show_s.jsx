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
            
            <div className="p-12">
                <h1>{ strategy.name }</h1>
                
                <div>
                    <h3>本文</h3>
                    <p>{ strategy.text }</p>
                </div>
                
                <div>
                    <p>{ strategy.kind.name }</p>
                </div>
                
                <div>
                    <Link href={`/home/strategy/${strategy.id}/edit`}>編集</Link>
                </div>
                
                <div>
                    <Link href="/home/strategy/">戻る</Link>
                </div>
            </div>
            
        </Authenticated>
        );
}

export default Show;