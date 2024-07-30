import NewsCard from "../components/newsCard";
import { useQuery } from "react-query";
import { fetchNews } from "../api/news";

const News = () => {
  const {
    data: news,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: fetchNews,
    queryKey: ["news"],
  });

  if (isError) {
    console.log("Error occurred while fetching news: ", error);
  }

  return (
    <div className="my-10 flex flex-col items-center gap-10">
      {news?.map((i) => (
        <NewsCard key={i.id} data={i} />
      ))}
    </div>
  );
};

export default News;
