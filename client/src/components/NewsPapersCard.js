import React, { useState, useEffect } from "react";
import {Link, useParams } from "react-router-dom";

import Axios from "axios";

import "./NewsPaperCard.css";

const NewsPaperCard = () => {
    const params = useParams();

    const [paperDetails, setPaperDetails] = useState([]);

    useEffect(() => {
        async function FetchData() {
            const response = await Axios.get(
                "http://localhost:8080/feeds/by/" + params.category
            );

            setPaperDetails(response.data);
        }
        FetchData();
    }, [params]);

    return (
        <div className="container mt-3">
            <div className="row d-flex justify-content-around">
                {paperDetails.map((details) => {
                    console.log(details);
                    return (
                        <div
                            className="col-lg-4 col-md-5 col-sm-6 col-xs-7  adjust-cards"
                            key={details._id}
                        >
                            <div className="card mx-auto card-sizing mt-5">
                                <img
                                    src={`./images/${details.categoryImg}`}
                                    className="card-image-sizing"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {details.newsPaperName}
                                    </h5>
                                    <p>
                                        {params.category} from{" "}
                                        {details.newsPaperName}
                                    </p>

                                    <Link to="" className="btn btn-primary">
                                        Read
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default NewsPaperCard;
