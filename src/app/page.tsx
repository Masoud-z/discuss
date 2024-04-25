import TopicCreatePopover from "@/components/topics/TopicCreatePopover";

export default async function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="font-bold text-xl m-2">Top Posts</h1>
      </div>
      <div>
        <TopicCreatePopover />
      </div>
    </div>
  );
}
