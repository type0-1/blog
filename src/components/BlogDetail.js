import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';  // Import your metadata (author, image, etc.)
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';  // For GitHub Flavored Markdown

function BlogDetail() {
  const { blogId } = useParams();  // Get blogId from URL parameters
  const [content, setContent] = useState('');
  const blogPost = blogPosts.find(post => post.id === blogId);  // Get the blog post metadata

  // Load the markdown file dynamically
  useEffect(() => {
    if (blogPost && blogPost.markdownFile) {
      import(`../markdown/blog-${blogId}.md`)
        .then((res) => {
          fetch(res.default)
            .then((response) => response.text())
            .then((text) => setContent(text));
        })
        .catch((err) => console.error('Error loading markdown file:', err));
    }
  }, [blogId, blogPost]);

  // If no blog post metadata is found, show an error message
  if (!blogPost) {
    return <div className="max-w-screen-lg mx-auto p-6">Blog post not found.</div>;
  }

  return (
    <div className="max-w-screen-md mx-auto p-8 mt-16 bg-white shadow-md rounded-lg">
      {/* Blog Title */}
      <h1 className="text-4xl font-bold mb-6 text-gray-900 text-center">
        {blogPost.title}
      </h1>

      {/* Author Section and Topic */}
      <div className="flex justify-between items-center mb-8">
        
        {/* Left Section: Author Image and Info */}
        <div className="flex items-center">
          <img 
            src={blogPost.authorImage} 
            alt="Author" 
            className="w-16 h-16 rounded-full object-cover shadow-lg" 
          />
          
          {/* Author Name and Date */}
          <div className="ml-4">
            <p className="text-lg font-semibold text-gray-700">{blogPost.author}</p>
            <p className="text-sm text-gray-500">{blogPost.date}</p>
          </div>
        </div>

        {/* Right Section: Blog Topic */}
        <div className="text-right">
          <h3 className="text-lg font-semibold text-orange-600">
            {blogPost.topic}
          </h3>
        </div>
      </div>

      {/* Blog Content rendered with react-markdown */}
      <div className="prose prose-lg text-gray-700 leading-relaxed">
        <ReactMarkdown>
          {content}
        </ReactMarkdown>
      </div>

      {/* Back Button */}
      <div className="mt-12 flex justify-center">
        <Link 
          to="/"  // Link to the home page or blog listing page
          className="text-white bg-orange-600 hover:bg-orange-500 py-3 px-6 rounded-full shadow-lg transition duration-300"
        >
          ← Back to Blogs
        </Link>
      </div>
    </div>
  );
}

export default BlogDetail;
