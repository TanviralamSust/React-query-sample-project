import { useMemo } from "react";
import useUserData from "../../hooks/useUserData.js";
import "../../styles/Home.scss";

export default function User() {
  const { userData, error, loading } = useUserData(
      "GET",
      "https://jsonplaceholder.typicode.com/posts/1/comments",
      {}
  );
  const cachedComment = useMemo(() => {
    return userData || {};
  }, [userData]);

  return (
      <div className="home-container">
        {!loading && cachedComment.length === 0 && <div> No Data Found! </div>}
        {error && <div> Error Found! </div>}
        {loading && <div> Loading </div>}
        {cachedComment.map((comment, index) => (
            <div className="post-container" key={index}>
              <span className="post-details">{comment.id}</span>
              <span className="post-details">{comment.name}</span>
              <span className="post-details">{comment.email}</span>
              <span className="post-details">{comment.body}</span>
            </div>
        ))}
      </div>
  )
}
