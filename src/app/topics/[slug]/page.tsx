import CommonPopover from "@/components/common/CommonPopover";
import UseLoggingCheck from "@/components/common/UseLoggingCheck";
import PostCreateForm from "@/components/posts/PostCreateForm";

interface Props {
  params: { slug: string };
}

const TopicShowPage = ({ params: { slug } }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="2xl">{slug}</h1>
      </div>
      <div>
        <CommonPopover
          btnTitle="Create a Post"
          popoverContent={<UseLoggingCheck content={<PostCreateForm slug={slug} />} />}
        />
      </div>
    </div>
  );
};

export default TopicShowPage;
