import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

function BlogDetail() {
  const { blogId } = useParams();
  const blogPost = blogPosts.find(post => post.id === blogId);

  if (!blogPost) {
    return <div className="max-w-screen-lg mx-auto p-4 text-center text-gray-700">Blog post not found.</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto my-20 bg-white rounded-lg pt-8"> {/* Added pt-24 here */}
  
      <div>
        {/* Blog Title */}
        <h1 className="text-4xl font-bold mb-8 text-gray-900 mx-6 my-8">
          {blogPost.title}
        </h1>

        {/* Author and Topic Section */}
        <div className="flex justify-between items-center mb-10 px-6 border-b pb-4">
          
          {/* Left Section: Author Image and Info */}
          <div className="flex items-center space-x-4">
            <img 
              src={blogPost.authorImage} 
              alt="Author" 
              className="w-16 h-16 rounded-full object-cover shadow-md" 
            />
            
            {/* Author Name and Date */}
            <div>
              <p className="text-lg font-medium text-gray-500">{blogPost.author}</p>
              <p className="text-sm text-gray-500">{blogPost.date}</p>
            </div>
          </div>

          {/* Right Section: Blog Topic */}
          <div className="text-right text-orange-600">
            <h3 className="text-md font-semibold">{blogPost.topic}</h3>
          </div>
        </div>

        {/* Blog Content rendered as HTML with prose styling */}
        <div 
          className="prose prose-lg max-w-none text-gray-800 mx-8 leading-relaxed my-10"
          dangerouslySetInnerHTML={{ __html: blogPost.content }} 
        />

        {/* Back Button */}
        <div className="flex justify-center mt-12">
          <Link 
            to="/" 
            className="text-white bg-orange-600 hover:bg-orange-500 py-3 px-6 rounded-full shadow-md transition duration-300"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
