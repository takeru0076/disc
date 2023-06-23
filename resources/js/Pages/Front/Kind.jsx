import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react'

const Kind = (props) => {
    const { kinds } = props; 
    
    const handleDeleteKind = (id) => {
        router.delete(`/home/kind/${id}`, {
            onBefore: () => confirm("本当に削除しますか？"),
        })
    }

    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Kind
                </h2>
            }>

            <div className="p-12">
                <Link href="/home/kind/create">create</Link>

                <h1>disc</h1>

                { kinds.map((kind) => (
                    <div key={kind.id}>
                        <h2>
                            <Link href={`/home//kind/${kind.id}`}>{ kind.name }</Link>
                        </h2>
                        
                        <button className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md" onClick={() => handleDeleteKind(kind.id)}>delete</button>
                    </div>
                )) }
            </div>
            
        </Authenticated>
        );
}

export default Kind;