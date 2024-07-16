import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export interface Blog {
  author: {
    name: string;
  };
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBlog(res.data.blog);
        setLoading(false);
        console.log(res.data.blog);
      });
  }, [id]);

  console.log(blog);

  return {
    loading,
    blog,
  };
};

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    try {
      axios
        .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setBlogs(res.data.blogs);
          setLoading(false);
        });
    } catch (error) {
      const e = error as Error;
      console.log(e.message);
    }
  }, []);

  return {
    loading,
    blogs,
  };
};
