import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
//import { useNavigate } from "react-router-dom";
//import { BrowserRouter, Route, Routes } from 'react-router-dom';　//追加したところ
import { Link } from '@inertiajs/react'; //追加したところ

const Home = (props) => {
    const { posts } = props; // 追加
    console.log(props); // 確認用に追加
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Home
                </h2>
            }>
            <div className="p-12">
                <div class="flex flex-col flex items-center">
                    <Link href="/home/strategy" class="text-white item-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-xl mb-4">Strategy</Link>
                    <Link href="/home/rule" class="text-white item-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-xl mb-4">Rule</Link>
                    <Link href="/home/other" class="text-white item-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-xl mb-4">Other</Link>
                    <Link href="/home/kind" class="text-white item-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-xl mb-4">Kind</Link>
                    <Link href="/home/whiteboard" class="text-white item-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-xl mb-4">WhiteBoard</Link>
                </div>
            </div>
            
        
            
        </Authenticated>
        );
}

export default Home;