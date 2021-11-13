import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const DisplayOne = (props) => {
    const { id } = props;
    const [author, setAuthor] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res.data);
                setAuthor(res.data);
            })
            .catch((err) => console.log(err));
    }, [])

    const deleteAuthor = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/authors/${idFromBelow}`)
            .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <header class="App-header">
                <h1>Welcome to {author.name}'s Library!</h1>
            </header>
            <img src={author.image1} />
            <img src={author.image2} />
            <img src={author.image3} />
            <p>Category: {author.category}</p>
            <p>Famous Quote: "{author.quote}"</p>
            <div>
                <button class="Main-buttons"><Link to={`/authors/edit/${author._id}`}>Edit</Link></button>
                <button class="Main-buttons" onClick={(e) => deleteAuthor(author._id)}>Delete</button>
            </div>
            <footer class="Footer">
                <Link to={"/"}>Home</Link>
            </footer>
        </div>
    );
}

export default DisplayOne;