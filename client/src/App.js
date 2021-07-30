import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import CategoryCard from "./components/CategoryCard";
import CreateRssDetails from "./components/CreateRssDetails";
import NewsPaperCard from "./components/NewsPapersCard";
import RssFeedList from "./components/RssFeedList";
import axios from "axios";

axios.defaults.baseURL = "https://dailyfreshnews.herokuapp.com";

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={CategoryCard}></Route>
                <Route
                    exact
                    path="/rssFeedDetails/createNewRssDetail"
                    component={CreateRssDetails}
                ></Route>
                <Route exact path="/:category" component={NewsPaperCard} />
                <Route
                    exact
                    path="/:category/:newsPaperName"
                    component={RssFeedList}
                />
            </Switch>
        </div>
    );
}

export default App;
