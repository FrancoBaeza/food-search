import Image from "next/image";
import Link from "next/link";

import StarRatings from "react-star-ratings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function FoodCard({
  name,
  description,
  image,
  rating,
}) {
  return (
    <div className="flex sm:flex-col flex-row items-center sm:h-[245px] sm:w-[270px] w-[90%] bg-slate-200 rounded-md shadow-lg">
      {/* imagen */}
      <div className="img-container relative">
        <div className="img-display justify-center items-center hover:bg-slate-600/50 ease-in z-10 absolute top-0 left-0 w-full h-full">
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
      <div className="p-2 w-full h-full flex flex-col justify-start gap-1">
        <div className="flex h-full sm:flex-row flex-col justify-between">
          <h3 className="font-semibold text-xs sm:text-sm sm:max-w-[140px] sm:h-[40px] h-[30px] overflow-hidden">
            {name}
          </h3>
          {/* este es para pantalla grande */}
          <span className="sm:block hidden">
            <StarRatings
              rating={rating}
              starRatedColor="gold"
              numberOfStars={5}
              name="rating"
              starDimension="18px"
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

        <div className="sm:flex justify-center hidden">
          <hr className="h-0 border-t-[2px] border-primary_green w-3/4" />
        </div>

        <p className=" sm:block hidden overflow-hidden text-xs font-semibold h-[32px]">
          {description}
        </p>
      </div>
    </div>
  );
}
