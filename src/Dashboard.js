import Carousel from "react-multi-carousel";
import React,{ useEffect,useState} from "react";
import { responsiveMain } from "./constants/responsiveMain";
import { responsiveMini } from "./constants/responsiveMini";
import CarouselMiniCard from "./components/CarouselMiniCard";
import CarouselMainCard from "./components/CarouselMainCard";
import axios from "axios";

function Dashboard() {

  const [apidata, setapidata] = useState([])
  const [searchTerm,setSearchTerm] = useState('')

  const getTransaction = async () => {
    const api = await axios.get(`https://tvapiv2.voot.com/wsv_1_0/episode/list.json?tvSeriesId=361251&from=1&to=20&sortId=mostPopular`);
    setapidata(api.data.assets);
    // console.log(api.data.assets);
  };


  useEffect(() => {
    getTransaction();
  }, []);



  return (
    <div className="App">
      <section>
        <Carousel
          responsive={responsiveMain}
          swipeable={false}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          arrows={true}
          containerClass="carousel-main-cards"
          dotListClass="slider-dot-list"
        >
          {apidata.map((el) => (
            <CarouselMainCard key={el.mediaName} data={el} />
          ))}
        </Carousel>
      </section>

      <section style={{ padding: "50px 0" }}>
        <div className="gridname">{/* <Button><i style={{color:"white"}} class="fa fa-search"></i></Button>     */}
        <h4 className="head-title">Top Picks</h4>
        <input type="search"
              placeholder="Search"
              className="me-2 input-search"
              aria-label="Search"
              onChange={e =>{setSearchTerm(e.target.value)}} />
        </div>
        <Carousel
          responsive={responsiveMini}
          swipeable={false}
          showDots={false}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          arrows={true}
          containerClass="carousel-mini-cards"
          dotListClass="slider-dot-list"
        >
          {apidata.filter((val) =>{
           if(searchTerm == ""){
            return val;
           } else if(val.mediaName.toLowerCase().includes(searchTerm.toLowerCase())){
            return val;
           }
          }).map((el) => (
            <CarouselMiniCard key={el.name} data={el} />
          ))}
        </Carousel>
      </section>
    </div>
  );
}

export default Dashboard;
