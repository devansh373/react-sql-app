import React from "react";
import { Link } from "react-router-dom";
import One from "../assets/one.jpg";
import Two from "../assets/two.jpg";
import Three from "../assets/three.jpg";
const Home = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Learn React in 2024",
      desc: "React is a powerful library for building user interfaces. In this post, we explore the best strategies to learn React in 2024.",
      img: One,
    },
    {
      id: 2,
      title: "Top 10 JavaScript Frameworks",
      desc: "JavaScript frameworks are evolving quickly. Here are the top 10 frameworks you should know about in 2024.",
      img: Two,
    },
    {
      id: 3,
      title: "The Future of Web Development",
      desc: "The web development landscape is constantly changing. This post dives into what we can expect in the future.",
      img: Three,
    },
    {
      id: 4,
      title: "CSS Grid vs Flexbox: A Complete Guide",
      desc: "Should you use CSS Grid or Flexbox for your layouts? We compare both and explain when to use each.",
      img: Two,
    },
    {
      id: 5,
      title: "Understanding TypeScript",
      desc: "TypeScript brings static typing to JavaScript. This post will help you understand why and how to use TypeScript in your projects.",
      img: One,
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {blogPosts.map((post) => (
          <div className="post" key={post.id}>
            <div className="image">
              <img src={post.img} alt="" />
              {/* image here */}
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
