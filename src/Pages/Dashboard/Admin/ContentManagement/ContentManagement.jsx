
// import "./styles.css";
import { Link } from "react-router-dom";

const ContentManagement = () => {
  
  return (
    <div>
      <div className="flex justify-end mb-20 ">
        <Link
          className="btn btn-success text-white text-lg"
          to={"/dashboard/content-management/add-blog"}
        >
          Add Blog
        </Link>
      </div>

   
    </div>
  );
};
export default ContentManagement;
