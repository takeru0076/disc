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

            <div className="p-12 flex flex-col flex items-center flex flex-col">
                <Link href="/home/other/create" class="no-underline">create</Link>

                <h1>disc</h1>
                <p>-----------------------------------------------------------------------------</p>

                { others.map((other) => (
                    <div key={other.id} class="flex flex-col flex items-center">
                        <h2>
                            <Link href={`/home//other/${other.id}`} class="no-underline">title:{ other.title }</Link>
                        </h2>
                        <p>text:{ other.text }</p>
                        <a href={other.url} class="no-underline">url</a>
                        
                        <p><button className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md" onClick={() => handleDeleteOther(other.id)}>delete</button></p>
                        <p>-----------------------------------------------------------------------------</p>
                    </div>
                )) }
                <Link href="/home/" class="text-white item-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-xl mb-4 no-underline">Home</Link>
            </div>
        </Authenticated>
        );
}

export default Other;