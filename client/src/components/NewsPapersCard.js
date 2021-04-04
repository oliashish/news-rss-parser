import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Axios from "axios";

import "./NewsPaperCard.css";

const NewsPaperCard = () => {
    const params = useParams();

    const [paperDetails, setPaperDetails] = useState([]);

    useEffect(() => {
        async function FetchData() {
            const response = await Axios.get(
                "/feeds/by/" + params.category
            );

            setPaperDetails(response.data);
        }
        FetchData();
    }, [params]);

    return (
        <div className="container mt-5">
            <h4 className="mt-2 mb-3">Choose Your News Paper</h4>
            <div className="row d-flex justify-content-around">
                {paperDetails.map((details) => {
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
                                        All {params.category} articles from{" "}
                                        <b>{details.newsPaperName}</b>
                                    </p>

                                    <Link
                                        to={
                                            params.category +
                                            "/" +
                                            details.newsPaperName
                                        }
                                        className="btn btn-success px-5"
                                    >
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
