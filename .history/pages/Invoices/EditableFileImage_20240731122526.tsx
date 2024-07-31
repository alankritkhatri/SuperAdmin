import { FC, useRef, useState } from "react";
import { Image } from "@react-pdf/renderer";
import "rc-slider/assets/index.css";
import React from "react";

interface Props {
  className?: string;
  placeholder?: string;
  value?: string;
  width?: number;
  onChangeImage?: (value: string) => void;
  onChangeWidth?: (value: number) => void;
  pdfMode?: boolean;
}

const EditableFileImage: FC<Props> = ({
  className,
  placeholder,
  value,
  width,
  onChangeImage,
  onChangeWidth,
  pdfMode,
}) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const widthWrapper = useRef<HTMLDivElement>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const marks = {
    100: "100px",
    150: "150px",
    200: "200px",
    250: "250px",
  };

  const handleClickOutside = () => {
    if (isEditing) {
      setIsEditing(false);
    }
  };

  const handleChangeImage = () => {
    if (fileInput?.current?.files) {
      const files = fileInput.current.files;

      if (files.length > 0 && typeof onChangeImage === "function") {
        const reader = new FileReader();

        reader.addEventListener("load", () => {
          if (typeof reader.result === "string") {
            onChangeImage(reader.result);
          }
        });

        reader.readAsDataURL(files[0]);
      }
    }
  };

  const handleChangeWidth = (value: number) => {
    if (typeof onChangeWidth === "function") {
      onChangeWidth(value);
    }
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const clearImage = () => {
    if (typeof onChangeImage === "function") {
      onChangeImage("");
    }
  };

  if (pdfMode) {
    if (value) {
      return (
  
      );
    } else {
      return <></>;
    }
  }

  return (
    <div
      className={`image ${value ? "mb-5" : ""} ${className ? className : ""}`}
    >
      {!value ? (
        <button type="button" className="image__upload" onClick={handleUpload}>
          {placeholder}
        </button>
      ) : (
        <>
          <img
            src={value}
            className="image__img"
            alt={placeholder}
            style={{ maxWidth: width || 100 }}
          />

          <button
            type="button"
            className="image__change"
            onClick={}
          >
            Change Image
          </button>

          <button type="button" className="image__edit" onClick={handleEdit}>
            Resize Image
          </button>

          <button type="button" className="image__remove" onClick={clearImage}>
            Remove
          </button>

          {isEditing && (
            <div ref={widthWrapper} className="image__width-wrapper">

            </div>
          )}
        </>
      )}

      <input
        ref={fileInput}
        tabIndex={-1}
        type="file"
        accept="image/*"
        className="image__file"
        onChange={handleChangeImage}
      />
    </div>
  );
};

export default EditableFileImage;
