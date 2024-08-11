import CommentCreateForm from "@/components/comments/CommentCreateForm";
import CommentList from "@/components/comments/CommentList";
import PostShow from "@/components/posts/PostShow";
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
      <PostShow postId={postId} />
      <CommentCreateForm postId={postId} startOpen />
      <CommentList postId={postId} />
    </div>
  );
}
