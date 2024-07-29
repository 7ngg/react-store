import NewsCard from "../components/newsCard";
import { useQuery } from "react-query";
import { fetchNews } from "../api/news";

const News = () => {
  const { data: news, isLoading } = useQuery({
    queryFn: fetchNews,
    queryKey: ["news"],
  });

  return (
    <div className="mt-10 flex flex-col items-center gap-10">
      {news?.map((i) => (
        <NewsCard key={i.id} data={i} />
      ))}
    </div>
  );
};

export default News;
