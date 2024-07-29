import React, { useState } from "react";
import axios from "axios";
import "./App2.css";


function Find() {
    const [id, setId] = useState(""); 
    const [data, setData] = useState([]);

    const handleSearch = () => {
        axios
            .get("http://localhost:8084/property/" + id)
            .then((response) => setData(response.data))
            .catch((err) => console.log(err));
    };

    return (
        <div id="body">
            <div className="container">
                 <br/><br/><br/>
                    <input
                        type="text"
                        id="search"
                        style={{ height: "38px", paddingBottom: "8px" }}
                        onChange={(e) => setId(e.target.value)} 
                    ></input>
                    <button className="btn btn-primary" onClick={handleSearch}>
                        Search
                    </button>
                  <br/><br/>

                <table className="table table-bordered table-striped w-100 border bg-white shadow px-5 pb-5 rounded">
                    <thead>
                        <tr>
                            <th>Property Id</th>
                            <th>Property Address</th>
                            <th>Property Type</th>
                            <th>Property Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.pid}</td>
                            <td>{data.address}</td>
                            <td>{data.type}</td>
                            <td>{data.status}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Find;
