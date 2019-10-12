import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import NewComment from './NewComment';

const useComments = ({ comments, onAdd, addingInProgress, addingError }) => {
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
      loading={addingInProgress}
      error={Boolean(addingError)}
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
