import React, { useState } from 'react';

// Recursive component to display comments and their replies
const Comment = ({ comment, level = 0, onAddReply }) => {
  const [replyText, setReplyText] = useState('');

  const handleAddReply = () => {
    if (replyText.trim()) {
      onAddReply(comment.id, replyText);
      setReplyText('');
    }
  };

  return (
    <div style={{ marginLeft: level * 20 }}>
      <div
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          marginBottom: '10px',
        }}
      >
        <strong>{comment.author}</strong>: {comment.text}
      </div>

      <div>
        <input
          type="text"
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder="Add a reply..."
          style={{ marginBottom: '8px', padding: '4px' }}
        />
        <button onClick={handleAddReply}>Reply</button>
      </div>

      {comment.replies && comment.replies.length > 0 && (
        <div style={{ paddingLeft: '20px' }}>
          {comment.replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              level={level + 1}
              onAddReply={onAddReply}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const NestedCommentApp = () => {
  const [comments, setComments] = useState([]);

  const handleAddComment = (text) => {
    const newComment = {
      id: Date.now(),
      author: 'Anonymous',
      text,
      replies: [],
    };
    setComments((prevComments) => [...prevComments, newComment]);
  };

  const handleAddReply = (commentId, replyText) => {
    const newReply = {
      id: Date.now(),
      author: 'Anonymous',
      text: replyText,
      replies: [],
    };

    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, replies: [...comment.replies, newReply] }
          : comment
      )
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Nested Comment Thread</h2>

      <div style={{ marginBottom: '12px' }}>
        <input
          type="text"
          id="newComment"
          placeholder="Write a comment..."
          style={{ padding: '8px', marginRight: '8px' }}
        />
        <button
          onClick={() =>
            handleAddComment(document.getElementById('newComment').value)
          }
        >
          Add Comment
        </button>
      </div>

      <div>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onAddReply={handleAddReply}
          />
        ))}
      </div>
    </div>
  );
};

export default NestedCommentApp;
