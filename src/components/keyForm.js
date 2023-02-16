import React from "react";

function KeyForm() {
    let url = document.location;
    let params = new URLSearchParams(url.search);
    return (
        <div>
            <h1>Oops, you need a Client ID (SDK Key)</h1>
            <p><i>Instructions go here</i></p>
            <form id="keyForm">
                <input type="text" name="key" />
                <button type="submit" onClick={
                    (e) => {
                        let key = document.forms["keyForm"]["key"].value;
                        params.set("clientKey", key);
                        let queryString = params.toString();
                        url.search = queryString;
                        e.preventDefault();
                        return false;
                    }  
                }>Create the URL</button>
            </form>
        </div>
    )
}

export default KeyForm;