import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardDesaparecido from "./CardDesaparecido";
import useReports from "@/hooks/reports/use-reports/use-reports";
import Link from "next/link";

const CarouselDesaparecidos: React.FC = () => {
  const reports = useReports(false);

  const settings = {
    dots: true,
    infinite: reports.reports.length >= 4,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024, // Para tablets e desktops pequenos
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Para dispositivos móveis maiores
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Para celulares pequenos
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
            font-size: 25px !important; 
          }
        `}
      </style>
      <div className="w-full max-w-6xl mx-auto">
        <p className="text-3xl text-gray-700 text-center my-3">
          Reconhece alguém? Clique em visualizar e adicione alguma informação!
        </p>
        <Slider {...settings} className="flex flex-col">
          {reports.isLoading ? (
            <p>Carregando!</p>
          ) : (
            reports.reports.map((report, index) => (
              <div key={index} className="p-2">
                <CardDesaparecido desaparecido={report} />
              </div>
            ))
          )}
        </Slider>
        <li className="m-5 text-2xl text-center bg-white">
          <Link href="allperson" className="text-black hover:text-red-800">
            Visualizar todos
          </Link>
        </li>
      </div>
    </>
  );
};

export default CarouselDesaparecidos;
