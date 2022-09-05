const CarouselMiniCard = ({ data }) => {
  return (
    <div
      style={{
        width: "300px",
        margin: "auto",
        height: "100%",
        borderRadius: "5px",
        overflow: "hidden",
        boxShadow:"2px 2px 12px 0px #000000d6"
      }}
    >
      <div style={{ width: "100%", height: "200px", position: "relative" }}>
        <img
          src={data.imgURL}
          alt={data.mediaName}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div style={{ padding: "15px 10px 25px 10px" }}>
        <p style={{ color:"#faebd7",fontSize: "15px"}}>{data.mediaName}</p>
        <div style={{ marginTop: "10px",color:"#faebd7",fontSize:"13px" }}>
          {data.desc.substr(0,100)}...
        </div>
      </div>
    </div>
  );
};

export default CarouselMiniCard;
