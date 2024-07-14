import React from 'react';
import Comments from './Comments';

const blogPosts = [
  {
    id: 1,
    title: 'Exploring the Future of E-commerce',
    description: 'E-commerce is evolving rapidly. Let’s explore the trends and innovations shaping the future of online shopping.',
    comments: [
      { name: 'User1', text: 'Great insights on e-commerce trends!' },
      { name: 'User2', text: 'I found this article very informative. Thanks!' },
    ],
  },
  {
    id: 2,
    title: 'Top 10 Tips for Online Shopping',
    description: 'Online shopping can be convenient and fun. Here are the top 10 tips to ensure a great shopping experience.',
    comments: [
      { name: 'User3', text: 'These tips are very useful. I’ll keep them in mind!' },
      { name: 'User4', text: 'Thank you for the helpful tips!' },
    ],
  },
];

const Blog = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Blog</h2>
        {blogPosts.map(post => (
          <Comments 
            key={post.id} 
            title={post.title} 
            description={post.description} 
            comments={post.comments} 
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
