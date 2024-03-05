import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/utility/http";

const GalleryCarousel = () => {
  type ItemType = {
    id: number;
    image: string;
    title: string;
  };

  const { data } = useQuery({
    queryKey: ["supplies"],
    queryFn: fetchData,
  });

  return (
    <div className="gallery-carousel-container">
      <Carousel>
        {data &&
          data.map((item: ItemType, index: number) => (
            <div key={index}>
              <img src={item.image} alt="" />
              <p className="legend">{item.title}</p>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default GalleryCarousel;
