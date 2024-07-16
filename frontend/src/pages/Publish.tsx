import axios from "axios";
import Appbar from "../components/Appbar";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const publish = async () => {
    const res = await axios.post(
      `${BACKEND_URL}/api/v1/blog`,
      {
        title: title,
        content: description,
        authorId: localStorage.getItem("authorId"),
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    navigate(`/blog/${res.data.id}`);
  };

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="max-w-screen-lg w-full pt-10">
          <div className="mb-6">
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              placeholder="Title"
              id="default-input"
              className="bg-gray-50 text-sm rounded-lg block w-full p-2.5 border-b border-blue-gray-200 bg-transparent focus:outline-none"
            />
          </div>
          <div className="relative w-full min-w-[200px]">
            <textarea
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="Content"
              className="peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            ></textarea>
          </div>

          <div>
            <button
              onClick={publish}
              className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publish;
