import PostCreateForm from "@/components/posts/PostCreateForm";
import PostList from "@/components/posts/PostList";
import { fetchPostsByTopicId } from "@/db/queries/posts";

interface Props {
  params: { topicId: string };
}

const TopicShowPage = ({ params: { topicId } }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{topicId}</h1>
        <PostList fetchData={() => fetchPostsByTopicId(topicId)} />
      </div>

      <div>
        <PostCreateForm topicId={topicId} />
      </div>
    </div>
  );
};

export default TopicShowPage;
