import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Box from '@mui/material/Box';

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
                <h1>disc</h1>
                <div>
                    <div>
                        <h2>Title</h2>
                        <p>This is a simple body.</p>
                    </div>
                </div>
                <Box
                  sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                />
            </div>
            
        </Authenticated>
        );
}

export default Home;