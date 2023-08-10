import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react'

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

            <div className="p-12 flex flex-col flex items-center flex flex-col">
                <Link href="/home/rule/create" className="custom-button text-xl mb-4">create</Link>

                <p>-----------------------------------------------------------------------------</p>

                { rules.map((rule) => (
                    <div key={rule.id} class="flex flex-col flex items-center">
                        <h2>
                            <Link href={`/home//rule/${rule.id}`} class="no-underline">title:{ rule.title }</Link>
                        </h2>
                        <p>text:{ rule.text }</p>
                        <a href={rule.url} class="no-underline">url</a>
                        <p><button className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md" onClick={() => handleDeleteRule(rule.id)}>delete</button></p>
                        <p>-----------------------------------------------------------------------------</p>
                    </div>
                )) }
                <Link href="/home" class="text-white item-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-xl mb-4 no-underline">Home</Link>
            </div>
        </Authenticated>
        );
}

export default Rule;