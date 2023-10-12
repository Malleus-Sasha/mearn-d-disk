import React from 'react';
import './fileList.scss'
import {useSelector} from "react-redux";
import File from "./file/File";

const FileList = () => {

    const files = useSelector(state => state.files.files).map(file => <File key={file.id} file={file}/>)
    // const files = mockFiles.map(file => <File key={file.id} file={file}/>)

    return (
        <div className='filelist'>
            <div className="filelist__header">
                <div className="filelist__name">Название</div>
                <div className="filelist__date">Дата</div>
                <div className="filelist__size">Размер</div>
            </div>
            {files}
        </div>
    );
};

var mockFiles = [
    {_id: 1, name: 'direct1', type: 'dir', size: '5gb', date: '05.10.2023'},
    {_id: 2, name: 'direct2', type: 'jpg', size: '7gb', date: '05.10.2023'},
];

export default FileList;
