import NewsCard from "../components/newsCard";

const News = () => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <NewsCard
        id="id"
        imageUrl="https://ichef.bbci.co.uk/news/1536/cpsprodpb/9088/live/4bc42a30-4c26-11ef-b2d2-cdb23d5d7c5b.jpg.webp"
        title="Huge California wildfire tears through 5,000 acres every hour"
        text="An enormous wildfire has grown by 8 sq miles an hour (20 sq km) as it spreads across parts of northern California.
The Park fire, which started on Wednesday in a suspected arson attack, has burned more than 350,000 acres of land north-east of Chico, and was only 10% contained as of Sunday morning, the state's fire agency Cal Fire said.
About 3,700 firefighters are battling the blaze, which has been fuelled by steep terrain and wind gusts.
A 42-year-old man was arrested on Thursday on suspicion of starting the fire by rolling a burning car into a gully near Alligator Hole in Butte County."
      />
    </div>
  );
};

export default News;
