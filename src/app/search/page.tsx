import PostList from "@/components/posts/PostList";
import { paths } from "@/core/constants/routes";
import { fetchPostsBySearchTerm } from "@/db/queries/posts";
import { redirect } from "next/navigation";

interface Props {
  searchParams: { term: string };
}

const SearchPage = ({ searchParams: { term } }: Props) => {
  if (!term) redirect(paths.home);
  const searchedValue = term.replaceAll("%20", " ");
  return (
    <div>
      <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
    </div>
  );
};

export default SearchPage;
