import React from "react";
import './App.css';

const ingredients = () => {

    return(
        <div className="outer-container">
            <main>
                <h1 className="ingredients">Ingredients</h1>
                <p className="crust">Graham Cracker Crust</p>
                <div className="list">
                    <div className="item">
                        <div className="box"/>
                        <label className="list-items">1 and 1/2 cups (150g) <strong>graham cracker crumbs</strong> (about 10 full sheet graham crackers)</label> <br />
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

                <p className="crust cheesecake">Cheesecake</p>
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
            </main>
            <aside className="small-container">
                <div className="sc-list">
                    <div className="sc-items" id="first">
                        <span className="material-symbols-outlined">local_dining</span>
                        <div>
                            <p className="sc-item1">Yields</p>
                            <p className="sc-item2">12 servings</p>
                        </div>
                    </div>
                    <div className="sc-items" id="second">
                        <span className="material-symbols-outlined" style={{color: "#4F4F4F"}}>schedule</span>
                        <div>
                            <p className="sc-item1">Prep TIme</p>
                            <p className="sc-item2" style={{color: "#333333"}}>45 minutes</p>
                        </div>
                    </div>
                    <div className="sc-items" id="third">
                        <span className="material-symbols-outlined" style={{color: "#4F4F4F"}}>schedule</span>
                        <div>
                            <p className="sc-item1">Cook Time</p>
                            <p className="sc-item2" style={{color: "#333333"}}>1 hour</p>
                        </div>
                    </div>
                    <div className="sc-items" id="fourth">
                        <span className="material-symbols-outlined" style={{color: "#4F4F4F"}}>schedule</span>
                        <div >
                            <p className="sc-item1">Total Time</p>
                            <p className="sc-item2" style={{color: "#333333"}}>7,75 hours</p>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default ingredients;