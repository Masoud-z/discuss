import TopicCreatePopover from "@/components/topics/TopicCreatePopover";
import TopicList from "@/components/topics/TopicList";
import { Divider } from "@nextui-org/react";

export default async function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="font-bold text-xl m-2">Top Posts</h1>
      </div>
      <div className="border shadow py-3 px-2">
        <TopicCreatePopover />
        <Divider className="my-2" />
        <h3 className="text-lg mb-2">Topics:</h3>
        <TopicList />
      </div>
    </div>
  );
}
