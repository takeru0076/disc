import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
//import { useNavigate } from "react-router-dom";
//import { BrowserRouter, Route, Routes } from 'react-router-dom';　//追加したところ
import { Link , Head } from '@inertiajs/react'; //追加したところ
import '/resources/css/app.css';

const Home = (props) => {
    const { posts } = props; // 追加
    console.log(props); // 確認用に追加
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Home
                </h2>
            }>
            
            <Head title="Home" />
            
            <div className="p-12">
                <div class="flex flex-col flex items-center">
                    <Link href="/home/strategy" className="custom-button text-xl mb-4">Strategy</Link>
                    <Link href="/home/rule" className="custom-button text-xl mb-4">Rule</Link>
                    <Link href="/home/other" className="custom-button text-xl mb-4">Other</Link>
                    <Link href="/home/kind" className="custom-button text-xl mb-4">Kind</Link>
                    <Link href="/home/whiteboard" className="custom-button text-xl mb-4">WhiteBoard</Link>
                </div>
            </div>
            
        
            
        </Authenticated>
        );
}

export default Home;