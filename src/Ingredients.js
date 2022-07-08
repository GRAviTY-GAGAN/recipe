import React from "react";
import './App.css';

const ingredients = () => {

    return(
        <div>
            <h1 className="ingredients">Ingredients</h1>
            <p className="crust">Graham Cracker Crust</p>
            <div className="list">
                <div className="item">
                    <div className="box"/>
                    <label className="list-items">1 and 1/2 cups (150g) graham cracker crumbs (about 10 full sheet graham crackers)</label> <br />
                </div>
                <div className="item">
                    <div className="box"/>
                    <label className="list-items">5 Tablespoons (70g) unsalted butter, melted</label> <br/>
                </div>
                <div className="item">
                    <div className="box"/>
                    <label className="list-items">1/4 cup (50g) granulated sugar</label> <br/>
                </div>
            </div>

            <p className="crust">Graham Cracker Crust</p>
            <div className="list">
                <div className="item">
                    <div className="box"/>
                    <label className="list-items">four 8-ounce blocks (904g) full-fat cream cheese, softened to room temperature</label> <br />
                </div>
                <div className="item">
                    <div className="box"/>
                    <label className="list-items">1 cup (200g) granulated sugar</label> <br/>
                </div>
                <div className="item">
                    <div className="box"/>
                    <label className="list-items">1 cup (240g) full-fat sour cream, at room temperature</label> <br/>
                </div>
                <div className="item">
                    <div className="box"/>
                    <label className="list-items">1 teaspoon pure vanilla extract</label> <br/>
                </div>
                <div className="item">
                    <div className="box"/>
                    <label className="list-items">2 teaspoons fresh lemon juice (optional, but recommended)</label> <br/>
                </div>
                <div className="item">
                    <div className="box"/>
                    <label className="list-items">3 large eggs, at room temperature</label> <br/>
                </div>
                <div className="item">
                    <div className="box"/>
                    <label className="list-items">topping suggestions: salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce (recipe in notes) </label> <br/>
                </div>
            </div>
        </div>
    );
}

export default ingredients;