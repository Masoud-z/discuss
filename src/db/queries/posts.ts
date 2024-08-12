import { Post } from "@prisma/client";
import { db } from "@/db";

export interface PostWithData extends Post {
  topic: { id: string; slug: string };
  user: { name: string | null };
  _count: { comments: number };
}

export function fetchPostsByTopicId(topicId: string): Promise<PostWithData[]> {
  return db.post.findMany({
    where: { topic: { id: topicId } },
    include: {
      topic: {
        select: { slug: true, id: true },
      },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });
}

export function fetchTopPosts(): Promise<PostWithData[]> {
  return db.post.findMany({
    orderBy: [{ comments: { _count: "desc" } }],
    include: {
      topic: {
        select: { slug: true, id: true },
      },
      user: { select: { name: true, image: true } },
      _count: { select: { comments: true } },
    },
    take: 5,
  });
}
