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
                    <h1>{ strategy.name }</h1>
                    
                    <div>
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
            </div>
            
        </Authenticated>
        );
}

export default Show;