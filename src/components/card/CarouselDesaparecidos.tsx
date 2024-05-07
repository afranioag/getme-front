import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardDesaparecido from "./CardDesaparecido";
import { PersonFields } from "../../models/person/types"; // Ajuste o caminho conforme necessário
import useReports from "@/hooks/reports/use-reports/use-reports";

const CarouselDesaparecidos: React.FC = () => {
  const reports = useReports(false);

  const settings = {
    dots: true,
    infinite: reports.reports.length >= 8,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <>
      <style>
        {`
          .slick-arrow {
            color: blue !important;
          }
          .slick-prev:before, .slick-next:before {
            color: black !important;
            font-size: 24px !important; 
          }
        `}
      </style>
      <div className="w-full max-w-full px-4 lg:px-8">
        <p className="text-3xl text-gray-700 text-center my-4">
          Reconhe alguém? Clique em visualizar e adicione alguma informação!
        </p>
        <Slider {...settings}>
          {reports.isLoading ? (
            <p>Carregando!</p>
          ) : (
            reports.reports.map((report, index) => (
              <div key={index} className="px-2">
                <CardDesaparecido desaparecido={report} />
              </div>
            ))
          )}
        </Slider>
      </div>
    </>
  );
};

export default CarouselDesaparecidos;
