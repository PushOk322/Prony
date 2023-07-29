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
import PostView from "../components/BigComponents/PostView.jsx";
import Tags from "../components/BigComponents/Tags.jsx";
import EditTag from "../components/BigComponents/EditTag.jsx";
import AddTag from "../components/BigComponents/AddTag.jsx";
import ReplaceTag from "../components/BigComponents/ReplaceTag.jsx";
import UserList from "../components/BigComponents/UserList.jsx";
import UserDetails from "../components/BigComponents/UserDetails.jsx";
import Activities from "../components/BigComponents/Activities.jsx";
import UserSegments from "../components/BigComponents/UserSegments.jsx";
import AddUserSegment from "../components/BigComponents/AddUserSegment.jsx";
import EditUserSegment from "../components/BigComponents/EditUserSegment.jsx";

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// const BigComponents = [Dashboard+, BoardList+, CreateBoard+, EditBoard+, DeleteBoard+, PostList+, PostView+, PostVoters+, ImportPost+, AddPost+, EditPost+, Tags+, EditTag+, AddTag+, ReplaceTag+, UserList+, UserDetails+, Activities+, UserSegments+, AddUserSegment+, EditUserSegment+,        ];
const BigComponents = [Dashboard, BoardList, CreateBoard, EditBoard, DeleteBoard, PostList,
    PostView, PostVoters, ImportPost, AddPost, EditPost, Tags, EditTag, AddTag, ReplaceTag,
    UserList, UserDetails, Activities, UserSegments, AddUserSegment, EditUserSegment,];
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
