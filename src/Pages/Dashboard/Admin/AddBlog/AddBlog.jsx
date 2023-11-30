import { useCallback, useState, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";
import { useRef } from "react";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
const AddBlog = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const axios = useAxiosPublic();
  const image_hosting_key = import.meta.env.VITE_image_upload;
  const imageHostingApi = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const handleBlog = async (e)=>{
    e.preventDefault();
    // console.log(content);
    const title = e.target.title.value;
    const photoUrl = e.target.url.files;

    const imageFile = { image: photoUrl[0] }
    const imageRes = await axios.post(imageHostingApi, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });


    if (imageRes?.data?.data?.display_url) {
      const blogData={
        title,
        thumbnail:imageRes?.data?.data?.display_url,
        content,
        status:'draft'
      }

      axios.post('/add-blog',blogData)
      .then(res=>{
        console.log(res.data);
      })
    }
    // console.log(title,imageRes?.data?.data?.display_url,content);

  }

  return (
    <div>

      <form onSubmit={handleBlog}>
      <div className="mb-3">
        <label htmlFor="title" className="font-bold">Title OF Blog</label>
        <input id="title" name="title" className="w-full mt-1  p-2" type="text" />
      </div>
      <div className="flex flex-col mb-3">
            <label htmlFor="url" className="font-bold"> Thumbnail</label>
            <input
              className="bg-[#F3F3F3] text-black py-2 mt-1 px-4 rounded-md"
              type="file"
              name="url"
              id="url"
            />
          </div>
      <div>
        <JoditEditor
          ref={editor}
          value={content}
          tabIndex={1}
          onChange={(newContent) => setContent(newContent)}
        />
      </div>
      <button type="submit" className="btn btn-success text-white mt-10">Add Blog</button>
      </form>

   
    </div>
  );
};
export default AddBlog;
