import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const DisplayAll = (props) => {
    const { authorList, setAuthorList } = props;
    const deleteFilter = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/authors/${idFromBelow}`)
            .then((res) => {
                console.log(res.data);
                const newList = authorList.filter((author, index) => author._id !== idFromBelow);
                setAuthorList(newList);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res.data);
                setAuthorList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div class="ticker-wrap">
            <div class="ticker-item">
                {
                    authorList ?
                        authorList.map((author, index) => (
                            <div class="ticker-item" key={index}>
                                <Link to={`/authors/${author._id}`}>{author.name}</Link>
                                {/* <button> <Link to={`/authors/edit/${author._id}`}>Edit</Link></button>
                            <button onClick={() => deleteFilter(author._id)}>Delete</button> */}
                            </div>
                        ))
                        : null
                }
            </div>
        </div>
    )
}

export default DisplayAll;
