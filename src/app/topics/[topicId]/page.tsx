import PostCreateForm from "@/components/posts/PostCreateForm";

interface Props {
  params: { topicId: string };
}

const TopicShowPage = ({ params: { topicId } }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{topicId}</h1>
      </div>

      <div>
        <PostCreateForm topicId={topicId} />
      </div>
    </div>
  );
};

export default TopicShowPage;
