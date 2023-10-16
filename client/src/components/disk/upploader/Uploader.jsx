import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UploadFile from "./UploadFile";
import { hideUploader } from "../../../reducers/uploadReducer";

const Uploader = () => {
  let files;
  files = useSelector((state) => state.upload.files);
  const isVisible = useSelector((state) => state.upload.isVisible);
  const dispatch = useDispatch();
  console.log(':Files:', files);

  // files = [{id:1, name: 'file', progress: 10}, {id:10, name: 'file', progress: 70}]

  return (
    isVisible && (
      <div className="uploader">
        <div className="uploader__header">
          <div className="uploader__title">Uploader</div>
          <button
            className="uploader__close"
            onClick={() => dispatch(hideUploader())}>
            X
          </button>
        </div>
        {files.map((file) => (
          <UploadFile key={file.id} file={file} />
        ))}
      </div>
    )
  );
};

export default Uploader;
