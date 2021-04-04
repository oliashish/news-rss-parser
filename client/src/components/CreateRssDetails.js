import React, { useState } from "react";
import Axios from "axios";

import "./RssDetailsForm.css";

const CreateRssDetails = () => {
    const [paperName, setPaperName] = useState("");
    const [category, setCategory] = useState("");
    const [rssFeedLink, setRssFeedLink] = useState("");
    const [image, setImage] = useState("");

    const onChangeFile = (e) => {
        setImage(e.target.files[0]);
    };

    const CreateRssDetails = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("paperName", paperName);
        formData.append("category", category);
        formData.append("rssFeedLink", rssFeedLink);
        formData.append("image", image);

        const response = Axios.post("/feeds", formData);
        console.log(response);
    };

    return (
        <div className="container mt-5 d-flex flex-column justify-content-center form-container">
            <form
                onSubmit={CreateRssDetails}
                className="container d-flex flex-column justify-content-center"
                encType="multipart/form-data"
            >
                <label>News Paper name</label>
                <input
                    type="text"
                    value={paperName}
                    placeholder="Enter New Paper Name..."
                    onChange={(event) => {
                        setPaperName(event.target.value);
                    }}
                ></input>
                <label>Category</label>
                <input
                    type="text"
                    value={category}
                    placeholder="e.g. editorial, finance, sports etc..."
                    onChange={(event) => {
                        setCategory(event.target.value);
                    }}
                ></input>
                <label>Rss link</label>
                <input
                    type="text"
                    value={rssFeedLink}
                    placeholder="Enter Rss Feeds Link..."
                    onChange={(event) => {
                        setRssFeedLink(event.target.value);
                    }}
                ></input>
                <label>Add category and new paper images</label>
                <input
                    type="file"
                    filename="image"
                    onChange={onChangeFile}
                ></input>

                <button
                    type="submit"
                    className="btn btn-success mt-4 w-25 mx-auto p-3 mb-2"
                >
                    Create
                </button>
            </form>
        </div>
    );
};

export default CreateRssDetails;
