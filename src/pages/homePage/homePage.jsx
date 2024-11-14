// eslint-disable-next-line no-unused-vars
import React from 'react';
import './homePage.css';
import EditableTable from "../../componets/editableTable/editableTable.jsx";
import ScrollableTable from "../../componets/temp/scrollableTable.jsx";


const HomePage = () => {
    return (
        <div className={"home-page"}>
            {/* 슬라이드 네비게이션 */}
            <p>Welcome home</p>
            <ScrollableTable/>
        </div>
    );
};

export default HomePage;