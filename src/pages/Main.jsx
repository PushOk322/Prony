import SideBar from "../components/BigComponents/SideBar.jsx";
import Head from "../components/BigComponents/Head.jsx";

import Dashboard from "../components/BigComponents/Dashboard.jsx";
import BoardList from "../components/BigComponents/BoardList.jsx";
import CreateBoard from "../components/BigComponents/CreateBoard.jsx";
import EditBoard from "../components/BigComponents/EditBoard.jsx";
import DeleteBoard from "../components/BigComponents/DeleteBoard.jsx";
import PostList from "../components/BigComponents/PostList.jsx";
import PostVoters from "../components/BigComponents/PostVoters.jsx";
import ImportPost from "../components/BigComponents/ImportPost.jsx";
import EditPost from "../components/BigComponents/EditPost.jsx";
import AddPost from "../components/BigComponents/AddPost.jsx";

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// const BigComponents = [Dashboard, BoardList];
const BigComponents = [Dashboard, BoardList, CreateBoard, EditBoard, DeleteBoard, PostList, PostVoters, ImportPost, AddPostEditPost,  ];
const Main = () => {

    const [currentComponent, setCurrentComponent] = useState(0);


    return (
        <>
            <div className="page">
                <SideBar
                    components={currentComponent}
                    setCurrentComponent={setCurrentComponent}
                ></SideBar>
                <div className="page__vertical-container">
                    <Head></Head>

                    {React.createElement(BigComponents[currentComponent], {
                        components: currentComponent,
                        setCurrentComponent: setCurrentComponent,
                    })}



                    <div className="height"></div>
                </div>
            </div>
        </>
    );
};

export default Main;
