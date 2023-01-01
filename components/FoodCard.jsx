import Image from "next/image";
import Link from "next/link";

import StarRatings from "react-star-ratings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function FoodCard({
  name,
  description,
  image,
  rating,
}) {
  return (
    <div className="flex sm:flex-col flex-row items-center  sm:w-[270px] w-[90%] bg-slate-200 rounded-md shadow-lg">
      {/* imagen */}
      <div className="img-container relative">
        <div className="img-display justify-center items-center  hover:bg-slate-600/50 ease-in z-10 absolute top-0 left-0 w-full h-full sm:rounded-t-md rounded-t-none sm:rounded-bl-none rounded-l-md">
          <Link
            className=" text-sm font-semibold  bg-slate-200 hover:bg-slate-300 shadow-xl px-4 py-1 rounded-2xl cursor-pointer"
            href="/"
          >
            See More <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <Image
          className="sm:rounded-t-md rounded-t-none z-30 sm:rounded-bl-none rounded-l-md h-full"
          src={image}
          alt={name}
          width={270}
          height={150}
        />
      </div>

      {/* info */}
      <div className="pt-2 w-full h-full flex flex-col justify-start gap-1">
        <div className="flex h-full items-center flex-col gap-2">
          <div className="flex flex-col items-center h-24">
            <p className=" text-xs font-semibold text-center">
              Author
            </p>

            <h3 className="!leading-6 font-semibold text-xs sm:text-lg sm:max-w-[200px] text-center line-clamp-2">
              {name}
            </h3>

            {/* este es para pantalla grande */}
            <span className="sm:block hidden">
              <StarRatings
                rating={rating}
                starRatedColor="gold"
                numberOfStars={5}
                name="rating"
                starDimension="15px"
                starSpacing="2px"
              />
            </span>
            {/* este es para pantalla chica */}
            <span className=" justify-between sm:hidden">
              <StarRatings
                rating={rating}
                starRatedColor="gold"
                numberOfStars={5}
                name="rating"
                starDimension="12px"
                starSpacing="2px"
              />
            </span>
          </div>

          <p className="text-center sm:block hidden text-xs font-medium h-16 line-clamp-4 sm:max-w-[220px]">
            {description}
          </p>

          <div className="flex flex-row flex-grow items-center bg-primary_green h-14 w-full rounded-b-md font-medium text-slate-200">
            <div className="grid justify-center content-center h-full w-full border-r-2 border-selected_green">
              1st
            </div>
            <div className="text-sm grid justify-center content-center h-full w-full border-l-2 border-selected_green">
              <span>
                <FontAwesomeIcon icon={faClock} /> 30:00
              </span>
            </div>
          </div>
        </div>

        {/* <div className="sm:flex justify-center hidden">
          <hr className="h-0 border-t-[2px] border-primary_green w-3/4" />
        </div> */}
      </div>
    </div>
  );
}
