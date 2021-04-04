import React from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import("./CardHolder.css");

class CategoryCard extends React.Component {
    constructor() {
        super();
        this.state = {
            rssDetails: [],
            categories: [],
            filteredCategories: [],
        };
    }

    async componentDidMount() {
        const response = await Axios.get("/feeds/categories");
        this.setState({ rssDetails: response.data });
        this.state.rssDetails.map((data) => {
            return this.state.categories.push(data.category);
        });

        this.setState({
            filteredCategories: this.state.categories.filter(
                (value, index) => this.state.categories.indexOf(value) === index
            ),
        });
    }

    render() {
        return (
            <div className="container-fluid card-holder px-0 mt-2">
                <h5 className="mt-4">Get Daily News And Articles</h5>

                <div className="row container-fluid d-flex mx-0 mt-3">
                    {this.state.filteredCategories.map((category) => {
                        return (
                            <NavLink to={category} className="link-decor">
                                <div
                                    className="container-fluid category-card p-5"
                                    key={category}
                                >
                                    <h3 className="mt-4">{category}</h3>
                                </div>
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default CategoryCard;
