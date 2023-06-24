import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react'

const Other = (props) => {
    const { others } = props; 
    
    const handleDeleteOther = (id) => {
        router.delete(`/home/other/${id}`, {
            onBefore: () => confirm("本当に削除しますか？"),
        })
    }

    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Other
                </h2>
            }>

            <div className="p-12">
                <Link href="/home/other/create">create</Link>

                <h1>disc</h1>

                { others.map((other) => (
                    <div key={other.id}>
                        <h2>
                            <Link href={`/home//other/${other.id}`}>{ other.name }</Link>
                        </h2>
                        <p>{ other.text }</p>
                        <a href={other.url}>url</a>
                        
                        <p><button className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md" onClick={() => handleDeleteOther(other.id)}>delete</button></p>
                    </div>
                )) }
            </div>
            
        </Authenticated>
        );
}

export default Other;