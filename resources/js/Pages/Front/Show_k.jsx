import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/react';

const Show = (props) => {
    const { kind } = props; 
    let { strategies } = props;
    
    strategies = strategies.filter((strategy)=>{
        return strategy.kind_id == kind.id;
    });

    console.log(strategies);

    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Kind
                </h2>
            }>
            
            <div className="p-12 flex flex-col flex items-center flex flex-col">
                <div class="flex flex-col flex items-center">
                    <h1>{ kind.name }</h1>
                    
                    { strategies.map((strategy) => (
                        <div key={strategy.id} class="flex flex-col flex items-center no-under line">
                            <h2>
                                <Link href={`/home//strategy/${strategy.id}`} class="no-underline">{ strategy.name }</Link>
                            </h2>
                            <p>-----------------------------------------------------------------------------</p>
                        </div>
                    )) }
                    
                    <br></br>
                    
                    <div>
                        <Link href={`/home/kind/${kind.id}/edit`} className="custom-button text-xl mb-4">edit</Link>
                    </div>
                    
                    <br></br>
                    
                    <div>
                        <Link href="/home/kind/" className="custom-button text-xl mb-4">back</Link>
                    </div>
                </div>
            </div>
            
        </Authenticated>
        );
}

export default Show;