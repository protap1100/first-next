const page = ({ params }) => {
  const blogs = [
    {
      id: 1,
      title: "Understanding React Hooks",
      author: "John Doe",
      content:
        "In this blog, we'll dive deep into React hooks and how they can be used to manage state and side effects in functional components...",
      date: "2024-08-10",
      tags: ["React", "JavaScript", "Web Development"],
    },
    {
      id: 2,
      title: "10 CSS Tricks You Need to Know",
      author: "Jane Smith",
      content:
        "CSS is a powerful tool for web design. In this post, we'll explore 10 essential CSS tricks that can help you build responsive and stylish web pages...",
      date: "2024-08-08",
      tags: ["CSS", "Web Design", "Frontend"],
    },
    {
      id: 3,
      title: "Node.js vs. Deno: Which One to Choose?",
      author: "Alice Johnson",
      content:
        "Both Node.js and Deno are popular JavaScript runtimes, but they have key differences. This article compares their features and helps you decide which one to use...",
      date: "2024-08-07",
      tags: ["Node.js", "Deno", "JavaScript"],
    },
    {
      id: 4,
      title: "Mastering Git for Version Control",
      author: "Michael Brown",
      content:
        "Git is essential for version control in modern software development. In this blog, we cover advanced Git commands and workflows to help you master version control...",
      date: "2024-08-05",
      tags: ["Git", "Version Control", "Software Development"],
    },
    {
      id: 5,
      title: "A Beginner's Guide to TypeScript",
      author: "Emily White",
      content:
        "TypeScript is a superset of JavaScript that adds static types. In this guide, we'll cover the basics of TypeScript and how to get started with it...",
      date: "2024-08-04",
      tags: ["TypeScript", "JavaScript", "Frontend"],
    },
    {
      id: 6,
      title: "Building RESTful APIs with Express.js",
      author: "David Wilson",
      content:
        "Express.js is a popular framework for building RESTful APIs. In this blog, we'll walk you through the process of setting up and building a RESTful API using Express...",
      date: "2024-08-03",
      tags: ["Express.js", "Node.js", "API"],
    },
    {
      id: 7,
      title: "Understanding Async/Await in JavaScript",
      author: "Sophia Martinez",
      content:
        "Async/Await is a powerful feature in JavaScript for handling asynchronous code. This post explains how to use Async/Await to write cleaner and more readable code...",
      date: "2024-08-02",
      tags: ["JavaScript", "Async", "Promises"],
    },
    {
      id: 8,
      title: "Introduction to MongoDB for Beginners",
      author: "Chris Lee",
      content:
        "MongoDB is a popular NoSQL database. In this beginner's guide, we'll cover the basics of MongoDB and how to get started with it...",
      date: "2024-08-01",
      tags: ["MongoDB", "Database", "NoSQL"],
    },
    {
      id: 9,
      title: "How to Optimize Web Performance",
      author: "Laura Adams",
      content:
        "Web performance is critical for user experience. This blog discusses various techniques to optimize your web pages for faster load times and better performance...",
      date: "2024-07-30",
      tags: ["Web Performance", "Optimization", "Frontend"],
    },
    {
      id: 10,
      title: "Exploring GraphQL: An Alternative to REST",
      author: "Daniel Robinson",
      content:
        "GraphQL is a query language for your API. In this post, we'll explore how GraphQL differs from REST and how it can be used to build flexible and efficient APIs...",
      date: "2024-07-28",
      tags: ["GraphQL", "API", "Web Development"],
    },
  ];

  const { id, title, author, content, date, tags } = blogs.find(
    (blog) => blog.id == params.details
  );

  return (
    <div className="flex justify-center items-center flex-col">
      <h1>{id}</h1>
      <h1>{title}</h1>
      <h1>{author}</h1>
      <h1>{content}</h1>
      <h1>{date}</h1>
      <h2>{tags}</h2>
    </div>
  );
};

export default page;
