import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import "./RssFeedList.css";

const RssFeedList = () => {
    const params = useParams();
    const { category, newsPaperName } = params;
    const [RssFeedsList, setRssFeedsList] = useState([]);

    useEffect(() => {
        async function FetchData() {
            const RssFeedsData = await Axios.get(
                `/feeds/${category}/${newsPaperName}`
            );
            console.log("data recived : ", RssFeedsData);
            setRssFeedsList(RssFeedsData.data);
        }
        FetchData();
    }, [category, newsPaperName]);

    return (
        <div className="container mt-5 p-3 rss-feeds-list-container">
            <h4>Your Articles</h4>
            {RssFeedsList.map((feeds) => {
                return (
                    <div className="container mt-5 p-5 news-feed-container">
                        <h4>{feeds.title}</h4>
                        <p className="text-muted">{feeds.pubDate}</p>
                        <p>{feeds.content.replace(/(<([^>]+)>)/gi, "")}</p>
                        <a
                            href={feeds.link}
                            target="blank"
                            className="btn btn-success px-4"
                        >
                            Read Article
                        </a>
                    </div>
                );
            })}
        </div>
    );
};

export default RssFeedList;
