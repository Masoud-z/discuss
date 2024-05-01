import CommonPopover from "@/components/common/CommonPopover";
import UseLoggingCheck from "@/components/common/UseLoggingCheck";
import PostCreateForm from "@/components/posts/PostCreateForm";
import PostList from "@/components/posts/PostList";
import { fetchPostWithTopicSlug } from "@/db/queries/posts";

interface Props {
  params: { slug: string };
}

const TopicShowPage = ({ params: { slug } }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl mb-2 font-bold">{slug}</h1>
        <PostList fetchData={() => fetchPostWithTopicSlug(slug)} />
      </div>
      <div>
        <CommonPopover
          btnTitle="Create a Post"
          popoverContent={
            <UseLoggingCheck content={<PostCreateForm slug={slug} />} />
          }
        />
      </div>
    </div>
  );
};

export default TopicShowPage;
