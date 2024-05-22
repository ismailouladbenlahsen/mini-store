import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, getStatus } from "./postsSlice";
import { useEffect } from "react";
import Cards from "./Cards";

function PostsList() {
  const dispatch = useDispatch();
  const status = useSelector(getStatus);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  const contentPending = <h1>loading...</h1>;
  const contentError = <h1>There was an error loading products!</h1>;

  return (
    <div className="container">
      {status === "fullfilled" && <Cards />}
      {status === "pending" && contentPending}
      {status === "error" && contentError}
    </div>
  );
}

export default PostsList;
