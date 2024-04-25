import paths from "@/core/routes";
import { db } from "@/db";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

const TopicList = async () => {
  const topics = await db.topic.findMany();
  const renderedTopicsList = topics.map((topic) => (
    <div key={topic.id}>
      <Link href={paths.topicShow(topic.slug)}>
        <Chip color="warning" variant="shadow">
          {topic.slug}
        </Chip>
      </Link>
    </div>
  ));
  return <div className="flex flex-wrap gap-3">{renderedTopicsList}</div>;
};

export default TopicList;
