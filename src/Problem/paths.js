export const PATH_INDEX = '/';
export const PATH_DETAILS = '/problem/:id';

export default {
  index: PATH_INDEX,
  details: id => PATH_DETAILS.replace(':id', id),
};
