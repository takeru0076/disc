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
    
    console.log(strategies);

    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Strategy
                </h2>
            }>

            <div className="p-12 flex flex-col flex items-center flex flex-col">
                <Link href="/home/strategy/create" className="custom-button text-xl mb-4">create</Link>
                
                <p>-----------------------------------------------------------------------------</p>

                { strategies.map((strategy) => (
                    <div key={strategy.id} class="flex flex-col flex items-center">
                        <h2>
                            <Link href={`/home//strategy/${strategy.id}`} class="no-underline">title:{ strategy.name }</Link>
                        </h2>
                        <p>text:{ strategy.text }</p>
                        <a href={strategy.url} class="no-underline">url</a>
                        <p>kind name:{ strategy.kind.name }</p>
                        <p>user name:{ strategy.user.name }</p>
                        
                        <button className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md" onClick={() => handleDeleteStrategy(strategy.id)}>delete</button>
                        <p>-----------------------------------------------------------------------------</p>
                    </div>
                )) }
                <Link href="/home" class="text-white item-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-xl mb-4 no-underline">Home</Link>
            </div>
            
        </Authenticated>
        );
}

export default Strategy;