import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const useCommentsVisibility = comments => {
  const [commentsAreVisible, setCommentsVisibility] = useState(false);
  const showComments = () => setCommentsVisibility(true);
  const hideComments = () => setCommentsVisibility(false);

  let button = null;
  let commentsFromHook = comments;

  if (!commentsAreVisible) {
    button = (
      <Button variant="outline-dark" onClick={showComments}>
        Show comments ({comments.length})
      </Button>
    );
    commentsFromHook = [];
  } else {
    button = (
      <Button variant="outline-dark" onClick={hideComments}>
        Hide comments
      </Button>
    );
  }

  return {
    comments: commentsFromHook,
    button,
  };
};
export default useCommentsVisibility;
