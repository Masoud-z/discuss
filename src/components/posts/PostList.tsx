import Link from "next/link";
import { PostWithData } from "@/db/queries/posts";
import { paths } from "@/core/constants/routes";

interface PostListProps {
  fetchData: () => Promise<PostWithData[]>;
}
export default async function PostList({ fetchData }: PostListProps) {
  const posts = await fetchData();
  const renderedPosts = posts.map((post) => {
    const topicId= post.topic.id;

    if (!topicId) {
      throw new Error("Need a slug to link to a post");
    }

    return (
      <div key={post.id} className="border rounded p-2">
        <Link href={paths.postShow(topicId, post.id)}>
          <h3 className="text-lg font-bold">{post.title}</h3>
          <div className="flex flex-row gap-8">
            <p className="text-xs text-gray-400">By {post.user.name}</p>
            <p className="text-xs text-gray-400">
              {post._count.comments} comments
            </p>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="space-y-2">{renderedPosts}</div>;
}
