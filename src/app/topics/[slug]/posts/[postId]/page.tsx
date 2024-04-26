interface Props {
  params: { slug: string; postId: string };
}

const PostShowPage = ({ params: { slug, postId } }: Props) => {
  return <div>PostShowPage</div>;
};

export default PostShowPage;
