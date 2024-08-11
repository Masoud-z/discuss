import { paths } from "@/core/constants/routes";
import Link from "next/link";

interface PostShowPageProps {
  params: {
    topicId: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { topicId, postId } = params;

  return (
    <div className="space-y-3">
      <Link
        className="underline decoration-solid"
        href={paths.topicShow(topicId)}
      >
        {"< "}Back to {topicId}
      </Link>
      {/* <PostShow /> */}
      {/* <CommentCreateForm postId={postId} startOpen /> */}
      {/* <CommentList comments={comments} /> */}
    </div>
  );
}
