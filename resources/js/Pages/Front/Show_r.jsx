import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from '@inertiajs/react'

const Show = (props) => {
    const { rule } = props; 

    return (
        <Authenticated auth={props.auth} header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Rule
            </h2>
        }>
        
        <Head title="Show_rule" />
        
        <div className="p-12 flex flex-col items-center">
            <div className="flex flex-col items-center">
                <h1>title:{ rule.title }</h1>
                
                <div>
                    <p>text:{ rule.text }</p>
                </div>
                
                {rule.url && (
                    <div>
                        <h3></h3>
                        <a href={rule.url}>url</a>
                    </div>
                )}
                
                <br></br>
                
                <div>
                    <Link href={`/home/rule/${rule.id}/edit`} className="custom-button text-xl mb-4">edit</Link>
                </div>
                
                <br></br>
                
                <div>
                    <Link href="/home/rule" className="custom-button text-xl mb-4">back</Link>
                </div>
            </div>
        </div>
    </Authenticated>
    );
}

export default Show;