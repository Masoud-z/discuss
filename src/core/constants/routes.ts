export const paths = {
  home: "/",
  search(term: string) {
    return `/search?term=${term}`;
  },
  topicShow(topicId: string) {
    return `/topics/${topicId}`;
  },
  postCreate(topicId: string) {
    return `/topics/${topicId}/posts/new`;
  },
  postShow(topicId: string, postId: string) {
    return `/topics/${topicId}/posts/${postId}`;
  },
};
