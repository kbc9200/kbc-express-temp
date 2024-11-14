import React, {useState} from 'react';
import './scrollablerTable.css';

const ScrollableTable = () => {

    return (
        <div className="table-container">
            <table className="scrollable-table">
                <thead>
                <tr>
                    <th>Header 1111aaksldjf;lkasdjfk bvhajergjfh lvkwe rnerhtgvlasdfjhkvgsbkl ,dfjhgrblksab asld</th>
                    <th>Header 1111aaksldjf;lkasdjfk bvhajergjfh lvkwe rnerhtgvlasdfjhkvgsbkl ,dfjhgrblksab asld 2</th>
                    <th>Header 3</th>
                    <th>Header 4</th>
                    <th>Header 5</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                    <td>Data 4</td>
                    <td>Data 5</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};


export default ScrollableTable;
