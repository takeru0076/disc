import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react'

const Strategy = (props) => {
    const { strategies } = props; 
    
    const handleDeleteStrategy = (id) => {
        router.delete(`/home/strategy/${id}`, {
            onBefore: () => confirm("本当に削除しますか？"),
        })
    }

    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Strategy
                </h2>
            }>

            <div className="p-12">
                <Link href="/home/strategy/create">create</Link>

                <h1>disc</h1>

                { strategies.map((strategy) => (
                    <div key={strategy.id}>
                        <h2>
                            <Link href={`/home//strategy/${strategy.id}`}>{ strategy.name }</Link>
                        </h2>
                        <p>{ strategy.text }</p>
                        
                        <button className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md" onClick={() => handleDeleteStrategy(strategy.id)}>delete</button>
                    </div>
                )) }
            </div>
            
        </Authenticated>
        );
}

export default Strategy;