import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogEntries';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import gsap from 'gsap';

function BlogDetail() {
  const { blogId } = useParams();
  const blogPost = blogPosts.find(post => post.id === blogId);

  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const contentRef = useRef(null);
  const backButtonWrapperRef = useRef(null);
  const backButtonRef = useRef(null); // Ref for the Link element

  useEffect(() => {

    // Animate the title first
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50, visibility: 'visible' },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Animate the author section with a delay after the title
    gsap.fromTo(
      authorRef.current,
      { opacity: 0, y: 50, visibility: 'visible' },
      { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
    );

    // Animate the content section with a further delay
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50, visibility: 'visible' },
      { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power3.out" }
    );

    // Animate the div wrapper for the back button
    gsap.fromTo(
      backButtonWrapperRef.current,
      { opacity: 0, y: 20, scale: 0.95, visibility: 'visible' },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.6, 
        delay: 0.8, 
        ease: "back.out(1.7)"
      }
    );

    // GSAP hover animation for the button
    const backButtonElement = backButtonRef.current;
    const hoverAnimation = gsap.to(backButtonElement, {
      scale: 1.1, // Slight scale-up on hover
      duration: 0.2,
      ease: "power3.out",
      paused: true, // Start paused to trigger only on hover
    });

    // Event listeners for hover effects
    const handleMouseEnter = () => hoverAnimation.play();
    const handleMouseLeave = () => hoverAnimation.reverse();

    backButtonElement.addEventListener('mouseenter', handleMouseEnter);
    backButtonElement.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup event listeners on component unmount
    return () => {
      backButtonElement.removeEventListener('mouseenter', handleMouseEnter);
      backButtonElement.removeEventListener('mouseleave', handleMouseLeave);
    };

  }, []);

  if (!blogPost) {
    return <div className="max-w-screen-lg mx-auto p-4 text-center text-gray-700">Blog post not found.</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto my-20 bg-white rounded-lg pt-8">
      <div>
        {/* Blog Title */}
        <h1
          ref={titleRef}
          className="text-4xl font-bold mb-8 text-gray-900 mx-6 my-8"
          style={{ visibility: 'hidden' }}
        >
          {blogPost.title}
        </h1>

        {/* Author and Topic Section */}
        <div
          ref={authorRef}
          className="flex justify-between items-center mb-10 px-6 border-b pb-4"
          style={{ visibility: 'hidden' }}
        >
          <div className="flex items-center space-x-4">
            <img
              src={blogPost.authorImage}
              alt="Author"
              className="w-16 h-16 rounded-full object-cover shadow-md"
            />
            <div>
              <p className="text-lg font-medium text-gray-500">{blogPost.author}</p>
              <p className="text-sm text-gray-500">{blogPost.date}</p>
            </div>
          </div>
          <div className="text-right text-orange-600">
            <h3 className="text-md font-semibold">{blogPost.topic}</h3>
          </div>
        </div>

        {/* Blog Content */}
        <div
          ref={contentRef}
          className="prose prose-lg max-w-none text-gray-800 mx-8 leading-relaxed my-10"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
          style={{ visibility: 'hidden' }}
        />

        {/* Back Button Wrapper Animation */}
        <div ref={backButtonWrapperRef} className="flex justify-center mt-12" style={{ visibility: 'hidden' }}>
          <Link
            ref={backButtonRef} // Ref for the link button itself
            to="/"
            className="text-white bg-orange-600 hover:bg-orange-500 py-3 px-6 rounded-full shadow-md transition-transform duration-300 flex items-center"
          >
            <ChevronRightIcon className="w-5 h-5 mr-2 transform rotate-180" />
            Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
