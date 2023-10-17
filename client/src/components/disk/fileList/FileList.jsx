import React from "react";
import "./fileList.scss";
import { useSelector } from "react-redux";
import File from "./file/File";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const FileList = () => {
  const files = useSelector((state) => state.files.files);
  // const files = mockFiles.map(file => <File key={file.id} file={file}/>)
  if (files.length === 0) {
    return (
        <div className='loader'>No files found.</div>
    )
  }

  return (
    <div className="filelist">
      <div className="filelist__header">
        <div className="filelist__name">Название</div>
        <div className="filelist__date">Дата</div>
        <div className="filelist__size">Размер</div>
      </div>
      <TransitionGroup>
        {files.map((file) => (
          <CSSTransition
            key={file._id}
            timeout={500}
            classNames={"file"}
            exit={false}>
            <File file={file} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

// var mockFiles = [
//     {_id: 1, name: 'direct1', type: 'dir', size: '5gb', date: '05.10.2023'},
//     {_id: 2, name: 'direct2', type: 'jpg', size: '7gb', date: '05.10.2023'},
// ];

export default FileList;
