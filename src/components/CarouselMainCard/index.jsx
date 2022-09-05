const CarouselMainCard = ({ data }) => {
  return (
    <div style={{ height: "65vh", width: "100%", position: "relative"}}>
      <h5 className="banner-title">{data.mediaTypeName} {data.episodeNo} | {data.language} | {data.genre}</h5>
      <img
        src={data.imgURL}
        alt={data.mediaName}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </div>
  );
};

export default CarouselMainCard;
