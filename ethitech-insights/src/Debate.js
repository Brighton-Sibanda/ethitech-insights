import React, { useState } from 'react';

const discussions = [
  {
    id: 1,
    title: "Data Privacy vs. National Security",
    comments: [
      { user: "User1", comment: "I think security should come first, especially in critical times." },
      { user: "User2", comment: "Privacy is a fundamental right and should not be compromised." }
    ]
  }
];

const Debate = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment) return;
    const updatedTopic = { ...selectedTopic, comments: [...selectedTopic.comments, { user: "Current User", comment: newComment }] };
    setSelectedTopic(updatedTopic);
    setNewComment("");
  };

  return (
    <div className="debate-container">
      {selectedTopic === null ? (
        <div>
          <h2>Select a Topic to Debate</h2>
          {discussions.map((topic) => (
            <button key={topic.id} onClick={() => setSelectedTopic(topic)}>
              {topic.title}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h3>{selectedTopic.title}</h3>
          {selectedTopic.comments.map((comment, index) => (
            <p key={index}><strong>{comment.user}:</strong> {comment.comment}</p>
          ))}
          <form onSubmit={handleCommentSubmit}>
            <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Add your comment"/>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Debate;
