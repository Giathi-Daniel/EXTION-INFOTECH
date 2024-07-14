import React from 'react';

const Comments = ({ title, description, comments }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="mt-4">
        <h4 className="text-xl font-semibold mb-2">Comments:</h4>
        {comments.map((comment, index) => (
          <div key={index} className="border-t border-gray-200 pt-2 mt-2">
            <p className="text-gray-800 font-semibold">{comment.name}</p>
            <p className="text-gray-600">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
