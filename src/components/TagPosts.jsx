import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { v4 as uuidv4 } from "uuid";

const BASE_URL = "https://dummyapi.io/data/api/";
const APP_ID = "60a373587c13e709e001a998";
const TagPosts = () => {
  let { name } = useParams();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    setLoading(true);
    const response = await axios.get(`${BASE_URL}tag/${name}/post`, {
      headers: { "app-id": APP_ID },
    });
    const values = response.data;
    setPosts(values.data);
    console.log(values.data);
    setLoading(false);
  };
  useEffect(() => {
    getPosts();
  }, [name]);
  return (
    <div className="pt-4 pb-4">
      <h1>Tag Related Posts</h1>
      <div className="row">
        {loading === true ? (
          <div>
            <h1>Loading ...</h1>
          </div>
        ) : (
          posts &&
          posts.length > 0 &&
          posts.map((post) => {
            return (
              <div key={uuidv4()} className="col-sm-4 mb-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={post.image}
                    alt="Employee pic"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{post.text}</h5>
                    <p className="card-text">{post.publishDate}</p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TagPosts;
