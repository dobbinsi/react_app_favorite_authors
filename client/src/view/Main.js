import React, { useState, useEffect } from "react";
import CreateAuthor from "../components/CreateAuthor";
import DisplayAll from "../components/DisplayAll";

const Main = (props) => {
    const [authorList, setAuthorList] = useState([]);

    return (
        <div>
            <CreateAuthor authorList={authorList} setAuthorList={setAuthorList} />
            <DisplayAll authorList={authorList} setAuthorList={setAuthorList} />
        </div>
    );
}

export default Main;
