/**
 * handle the event from the event bus
 * @param {string} type 
 * @param {object} data 
 * @param {object} posts 
 */ 

const handleEvent = (type, data, posts) => {
  if (type === 'PostCreated') {
    const { id, title } = data;

    posts[id] = { id, title, comments: [] };
  }

  if (type === 'CommentCreated') {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    post.comments.push({ id, content, status });
  }

  if (type === 'CommentUpdated') {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    const comment = post.comments.find((comment) => {
      return comment.id === id;
    });

    comment.status = status;
    comment.content = content;
    console.log(post, 'from the query')
  }

  return posts
};

export default handleEvent;