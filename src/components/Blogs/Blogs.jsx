import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <div>
            <h1>Blog: {blogs.length}</h1>

        </div>
    );
};

export default Blogs;