import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router";

const BASE_URL = "https://dummyapi.io/data/api/tag";
const APP_ID = "60a373587c13e709e001a998";

const Tags = () => {
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const getTags = async () => {
    setLoading(true);
    const response = await axios.get(BASE_URL, {
      headers: { "app-id": APP_ID },
    });
    const values = response.data;
    setTags(values.data);
    setLoading(false);
  };

  const handleclick = (name) => {
    history.push(`/tagposts/${name}`);
  };
  useEffect(() => {
    getTags();
  }, []);
  return (
    <div className="pt-4 pb-4">
      <h1>Tags</h1>
      <div className="row">
        {loading ? (
          <h1>Loading ...</h1>
        ) : (
          tags &&
          tags.length > 0 &&
          tags.map((tag) => {
            return (
              <div
                onClick={() => handleclick(tag)}
                key={uuidv4()}
                className="col-sm-6"
              >
                <div className="alert alert-info p-3 m-4">{tag}</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Tags;
