import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router, Head } from '@inertiajs/react'

const Rule = (props) => {
    const { rules } = props; 
    
    const handleDeleteRule = (id) => {
        router.delete(`/home/rule/${id}`, {
            onBefore: () => confirm("本当に削除しますか？"),
        })
    }

    return (
        <Authenticated auth={props.auth} header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Rule
            </h2>
        }>
        
        <Head title="Rule" />
        
        <div className="p-12 flex flex-col items-center">
            <Link href="/home/rule/create" className="custom-button text-xl mb-4">create</Link>

            <p>-----------------------------------------------------------------------------</p>

            { rules.map((rule) => (
                <div key={rule.id} className="flex flex-col items-center">
                    <h2>
                        <Link href={`/home/rule/${rule.id}`} className="no-underline">title:{ rule.title }</Link>
                    </h2>
                    <p>text:{ rule.text }</p>
                    {rule.url && <a href={rule.url} className="no-underline">url</a>}
                    <p><button className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md" onClick={() => handleDeleteRule(rule.id)}>delete</button></p>
                    <p>-----------------------------------------------------------------------------</p>
                </div>
            )) }
            
            <Link href="/home" className="text-white item-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-xl mb-4 no-underline">Home</Link>
        </div>
    </Authenticated>
    );
}

export default Rule;
