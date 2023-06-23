import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Other = (props) => {
    
    const { posts } = props; // 追加
    console.log(props); // 確認用に追加
    
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Other
                </h2>
            }>
            
            <div className="p-12">
                <h1>disc</h1>
                <div>
                    <div>
                        <h2>Title</h2>
                        <p>This is a simple body.</p>
                    </div>
                </div>
            </div>
            
        </Authenticated>
        );
}

export default Other;