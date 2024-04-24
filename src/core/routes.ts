const paths = {
  home: "/",
  topicShow: (topicSlug: string) => `/topics/${topicSlug}`,
  postCreate: (topicSlug: string) => `/topics/${topicSlug}/posts/new`,
  postShow: (topicSlug: string, postId: string) =>
    `/topics/${topicSlug}/posts/${postId}`,
};
export default paths;
