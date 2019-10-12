import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Alert } from 'react-bootstrap';

const NewComment = ({ onAdd, loading, error }) => {
  const [description, setDescription] = useState('');
  const [success, setSuccess] = useState(false);
  const handleChange = e => {
    setDescription(e.currentTarget.value);
    setSuccess(false);
  };
  const handleSubmit = async e => {
    setSuccess(false);
    e.preventDefault();
    await onAdd(description);
    setDescription('');
    setSuccess(true);
  };

  return (
    <>
      {error && <Alert variant="danger">Error occured</Alert>}
      {success && (
        <Alert variant="success" onClose={() => setSuccess(false)} dismissible>
          Comment has been added
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="description">Add comment</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit" disabled={loading}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export const NewCommentPropTypes = {
  onAdd: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

NewComment.propTypes = NewCommentPropTypes;

export default NewComment;
