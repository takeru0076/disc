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

            <div className="p-12">
                <Link href="/home/rule/create">create</Link>

                <h1>disc</h1>

                { rules.map((rule) => (
                    <div key={rule.id}>
                        <h2>
                            <Link href={`/home//rule/${rule.id}`}>{ rule.title }</Link>
                        </h2>
                        <p>{ rule.text }</p>
                        <a href={rule.url}>url</a>
                        
                        <p><button className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md" onClick={() => handleDeleteRule(rule.id)}>delete</button></p>
                    </div>
                )) }
            </div>
            
        </Authenticated>
        );
}

export default Rule;