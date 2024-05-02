import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { IndividualBlog } from "../components/IndividualBlog";
import { Skeletons } from "../components/Skeletons";
import { AppBar } from "../components/AppBar";

export const Blog =()=>{
  const {id} = useParams();
  const {loading, blog} = useBlog({
    id: id ||""
  });
  if(loading || !blog ){
    return<div>
      <AppBar/>
      <div className="flex">
     <div className="pt-10 pl-11">
      <Skeletons/>
      <Skeletons/>
      <Skeletons/>
    </div>
    <div className="pt-10 pl-96">
         <Skeletons/>
      </div>
    </div>
    
    </div>
  }
    return <div>
      <IndividualBlog blog = {blog}/>
      
    </div>
}