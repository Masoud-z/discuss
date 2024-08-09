import TopicCreateForm from "@/components/topics/TopicCreateForm";
import TopicList from "@/components/topics/TopicList";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
      </div>
      <div className="flex flex-col gap-2 border shadow p-3 rounded-xl">
        <TopicCreateForm />
        <Divider />
        <h3 className="text-lg font-semibold">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}
