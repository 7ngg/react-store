import { News } from "../Entities/news";

interface NewsCardProps {
  data: News;
}

const NewsCard = ({ data }: NewsCardProps) => {
  return (
    <div
      key={data.id}
      className="container flex w-9/12 gap-4 text-wrap p-5 border bg-white border-black rounded"
    >
      <div className="min-w-[300px] max-w-[700px] max-h-[400px]">
        <img
          className="w-full h-full object-cover"
          src={data.imageUrl}
          alt={data.id}
        />
      </div>
      <div>
        <h1 className="font-bold text-4xl">{data.title}</h1>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

export default NewsCard;
