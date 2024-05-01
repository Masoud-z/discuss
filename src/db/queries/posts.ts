import { db } from "..";

// export interface PostWithData extends Post {
//   topic: { slug: string };
//   user: { name: string | null };
//   _count: { comments: number };
// }

export type PostWithData = Awaited<
  ReturnType<typeof fetchPostWithTopicSlug>
>[number];

export function fetchPostWithTopicSlug(slug: string) {
  return db.post.findMany({
    where: { topic: { slug } },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });
}
