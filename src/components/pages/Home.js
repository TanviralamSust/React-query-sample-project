import { useMemo } from "react";
import useUserData from "../../hooks/useUserData.js";
import "../../styles/Home.scss";
import {useFunds} from "../../context/FundContext";

export default function Home() {
  const { userData, error, loading } = useUserData(
    "GET",
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );
  const {getFundsList} = useFunds()
  const fundInfo = getFundsList(
      "https://jsonplaceholder.typicode.com/posts",
      "GET",
      {}
  );
  console.log(fundInfo);
  const cachedData = useMemo(() => {
    return userData || {};
  }, [userData]);

  return (
    <div className="home-container">
      {!loading && cachedData.length === 0 && <div> No Data Found! </div>}
      {error && <div> Error Found! </div>}
      {loading && <div> Loading </div>}
      {cachedData.map((post, index) => (
        <div className="post-container" key={index}>
          <span className="post-details">{post.id}</span>
          <span className="post-details">{post.title}</span>
          <span className="post-details">{post.body}</span>
        </div>
      ))}
    </div>
  );
}
