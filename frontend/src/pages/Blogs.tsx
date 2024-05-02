import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { Skeletons } from "../components/Skeletons";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const {loading, blogs} = useBlogs();
  if(loading){
    return <div>
      <AppBar/>
    <div className="flex justify-center pt-4">
      <div>
      <Skeletons/>
      <Skeletons/>
      <Skeletons/>
      <Skeletons/>
      <Skeletons/>

      </div>

    </div>
    </div>
  }
  return (
    <div>
      <AppBar/>
    <div className="flex justify-center pt-4">
        <div className="justify-center pt-2">
          {blogs.map(blog => <BlogCard
        id={blog.id}
        authorName={blog.author.name || "Anonymous"}
        title={blog.title}
        content={blog.content}
        publishedDate={"1 jan 2024"}
      />)}  
        </div>
    </div>
    </div>
  );
};
