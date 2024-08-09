import { paths } from "@/core/constants/routes";
import { db } from "@/db";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

const TopicList = async () => {
  const topics = await db.topic.findMany();

  return (
    <div className="flex flex-col gap-2">
      {topics.map((topic) => (
        <Link key={topic.id} href={paths.topicShow(topic.slug)}>
          <Chip color="warning" variant="shadow">
            {topic.slug}
          </Chip>
        </Link>
      ))}
    </div>
  );
};

export default TopicList;
