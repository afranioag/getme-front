import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardDesaparecido from "./CardDesaparecido";
import { PersonFields } from "../../models/person/types"; // Ajuste o caminho conforme necessário
import useReports from "@/hooks/reports/use-reports/use-reports";

const CarouselDesaparecidos: React.FC = () => {
  const reports = useReports(false);

  const settings = {
    dots: true,
    infinite: reports.reports.length >= 4,
    speed: 500,
    slidesToShow: 4,
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
            font-size: 25px !important; 
          }
        `}
      </style>
      <div className="w-4/6 ">
        <p className="text-3xl text-gray-700 text-center my-3">
          Reconhe alguém? Clique em visualizar e adicione alguma informação!
        </p>
        <Slider {...settings} className="flex flex-col">
          {reports.isLoading ? (
            <p>Carregando!</p>
          ) : (
            reports.reports.map((report, index) => (
              <div key={index} className="">
                <CardDesaparecido desaparecido={report} />
              </div>
            ))
          )}
        </Slider>
        <li className="m-5 text-2xl text-center bg-white">
          <Link href={"allperson"} className="text-black hover:text-red-800">
            Visualizar todos
          </Link>
        </li>
      </div>
    </>
  );
};

export default CarouselDesaparecidos;
