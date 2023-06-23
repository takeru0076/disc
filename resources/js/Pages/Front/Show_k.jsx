import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/react';

const Show = (props) => {
    const { kind } = props; 

    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Kind
                </h2>
            }>
            
            <div className="p-12">
                <h1>{ kind.name }</h1>
                
                <div>
                    <Link href={`/home/kind/${kind.id}/edit`}>編集</Link>
                </div>
                
                <div>
                    <Link href="/home/kind/">戻る</Link>
                </div>
            </div>
            
        </Authenticated>
        );
}

export default Show;