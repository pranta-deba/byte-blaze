import { useEffect, useState } from "react";
import Card from "../components/Card";
import { deleteBlog, getBlogs } from "../Utils";
import EmptyState from "../components/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storeBlogs = getBlogs();
    setBlogs(storeBlogs);
  }, []);

  const handleDelete = (id) => {
    deleteBlog(id);
    const storeBlogs = getBlogs();
    setBlogs(storeBlogs);
  };
  if (blogs.length < 1)
    return (
      <EmptyState
        message="No Bookmarks Found"
        address="/blogs"
        label="Browse Blogs"
      />
    );
  return (
    <div className="grid justify-center grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3 md:my-6 px-4 sm:px-8 lg:px-12 py-8">
      {blogs.map((blog) => (
        <Card
          handleDelete={handleDelete}
          dateable={true}
          blog={blog}
          key={blog.id}
        />
      ))}
    </div>
  );
};

export default Bookmarks;
