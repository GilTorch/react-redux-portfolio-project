import React, { useState,Fragment } from 'react';
import UserIcon from '../svg/user';
import styled from 'styled-components';
import { mainColor } from '../utils/theme';

const UploadPicture = ({ onPicture }) => {

    const [picture, setPicture] = useState("")

    const handleChange = e => {
        let picture = URL.createObjectURL(new Blob([e.target.files[0]], { type: "application/zip" }));
        setPicture(picture);
        onPicture(picture);
    }

    const handleRemove = e =>{
        e.preventDefault();
        setPicture("");
    }

    return (
        <label>
            {
                !picture ?
                    <UserIcon width={imageHeight} height={imageHeight} />
                    :
                    <div className="preview-image-container">
                        <PreviewImage width={imageHeight} height={imageHeight}>
                            <img src={picture} />
                        </PreviewImage>
                        <RemovePicture onClick={handleRemove}>Remove picture</RemovePicture>
                    </div>
            }
            <input
                hidden={true}
                type="file"
                accept="image/*"
                onChange={handleChange}
                multiple={false}
            />
        </label>
    )
}

export default UploadPicture;


const imageHeight = "80px";

const PreviewImage = styled.div`
    width:${imageHeight};
    height:${imageHeight};
    border-radius: 50%;
    border:3px solid ${mainColor};
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;

    img{
        width:${imageHeight};
    }

    .preview-image-container{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
    }
`

const RemovePicture = styled.button`
    background:transparent;
    border:none;
    color:red;
    text-decoration:underline;
`