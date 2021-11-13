import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateAuthor = (props) => {
    const { authorList, setAuthorList } = props;
    const [errors, setErrors] = useState({});
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [quote, setQuote] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors",
            {
                name,
                category,
                image1,
                image2,
                image3,
                quote,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAuthorList([...authorList, res.data]);
                setName("");
                setCategory("");
                setImage1("");
                setImage2("");
                setImage3("");
                setQuote("");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div>
            <header class="App-header">
                <h1>Favorite Authors</h1>
            </header>
            <h2>Tell us about your favorite wordsmith!</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label class="Form-control"  htmlFor="name">Name:</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" />
                    <br />
                    {
                        errors.name ?
                            <span>{errors.name.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label class="Form-control" htmlFor="name">Category:</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} name="category">
                        <option value="none" defaultValue hidden>Select a Category:</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Autobiography">Autobiography</option>
                        <option value="Biography">Biography</option>
                        <option value="Business and Economics">Business and Economics</option>
                        <option value="Folklore">Folklore</option>
                        <option value="Health and Wellness">Health and Wellness</option>
                        <option value="Historical Fiction">Historical Fiction</option>
                        <option value="Mystery and Suspense">Mystery and Suspense</option>
                        <option value="Philosophy">Philosophy</option>
                        <option value="Sciene Fiction and Fantasy">Sciene Fiction and Fantasy</option>
                    </select>
                    <br />
                    {
                        errors.category ?
                            <span>{errors.category.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label class="Form-control" htmlFor="image1">Favorite Book (Image URL):</label>
                    <input value={image1} onChange={(e) => setImage1(e.target.value)} name="image1" type="text" />
                    <br />
                    {
                        errors.image1 ?
                            <span>{errors.image1.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label class="Form-control" htmlFor="image2">Second Book (Optional):</label>
                    <input value={image2} onChange={(e) => setImage2(e.target.value)} name="image2" type="text" />
                    <br />
                    {
                        errors.image2 ?
                            <span>{errors.image2.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label class="Form-control" htmlFor="image3">Third Book (Optional):</label>
                    <input value={image3} onChange={(e) => setImage3(e.target.value)} name="image3" type="text" />
                    <br />
                    {
                        errors.image3 ?
                            <span>{errors.image3.message}</span>
                            : null
                    }
                </div>
                <div class="Form-bottom">
                    <label class="Form-control" htmlFor="quote">Famous Quote:</label>
                    <textarea class="Vertical-align" rows="4" value={quote} onChange={(e) => setQuote(e.target.value)} name="quote" type="text" />
                    <br />
                    {
                        errors.quote ?
                            <span>{errors.quote.message}</span>
                            : null
                    }
                </div>
                <button class="Create-button">Add New Author!</button>
            </form>
        </div>
    )
}

export default CreateAuthor;
