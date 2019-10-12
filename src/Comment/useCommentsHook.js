import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import NewComment from './NewComment';

const useComments = ({
  comments,
  onAdd,
  addingCommentInProgress,
  addingCommentError,
}) => {
  const [visible, setVisibility] = useState(false);
  const show = () => setVisibility(true);
  const hide = () => setVisibility(false);

  let button = null;

  if (!visible) {
    button = (
      <Button variant="outline-dark" onClick={show}>
        Show comments ({comments.length})
      </Button>
    );
  } else {
    button = (
      <Button variant="outline-dark" onClick={hide}>
        Hide comments
      </Button>
    );
  }

  const newOne = (
    <NewComment
      onAdd={onAdd}
      loading={addingCommentInProgress}
      error={Boolean(addingCommentError)}
    />
  );

  return {
    comments,
    button,
    visible,
    newOne,
  };
};
export default useComments;
