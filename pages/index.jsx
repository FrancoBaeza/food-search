import { withIronSessionSsr } from "iron-session/next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import FoodCard from "../components/FoodCard";
import { ironOptions } from "../lib/config";

export default function Home({user}) {
    console.log('USUARIO EN SESION: ', user)
    const foodCards = [
        {
        name: "Comida con nombre muy largo asd asd asd asd ",
        description:
            "Esta es la descripcion de la comida que es re larga y no se que mas poner  sd sd sd ffr  re er er er ger ger ger egr erger ger ger egr erg  egerg  dfsd fsd s ",
        image: "https://picsum.photos/270/150",
        rating: 4.5,
        },
        {
        name: "Food Name",
        description: "Food Description",
        image: "https://picsum.photos/270/150",
        rating: 4.5,
        },
        {
        name: "Food Name",
        description: "Food Description",
        image: "https://picsum.photos/270/150",
        rating: 4.5,
        },
        {
        name: "Food Name",
        description: "Food Description",
        image: "https://picsum.photos/270/150",
        rating: 4.5,
        },
    ];
    return (
        <>
        <div className="w-full flex flex-col gap-7 items-center py-20 bg-food-banner bg-cover">
            <div className="flex flex-col gap-4 items-center">
            <h1 className="sm:text-4xl text-2xl font-bold text-slate-200 text-center">
                WHAT ARE WE EATING TODAY?
            </h1>
            <h6 className=" text-center sm:text-base text-sm font-medium text-slate-200">
                {"Don't worry, we got you!"} <br />
                {
                "Insert what ingreadients do you have and we'll give you some ideas"
                }
            </h6>
            </div>

            <div className="sm:p-4 p-2 sm:text-base text-sm bg-primary_green text-slate-200 font-semibold cursor-pointer hover:bg-selected_green shadow-lg">
            GET STARTED NOW <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </div>

        {/* BEST RATED RECIPES */}
        <section className="flex flex-col gap-4 items-center py-8 bg-slate-100">
            <div className="">
            <h2 className="sm:text-3xl text-xl font-bold text-slate-600">
                BEST RATED RECIPES
            </h2>
            <hr className="h-0 border-t-[3px] border-primary_green w-1/3 " />
            </div>
            <div className="sm:grid sm:grid-cols-4 flex flex-col justify-center gap-5 items-center">
            {/* CARDS */}
            {foodCards.map((foodCard, i) => (
                <FoodCard key={i} {...foodCard} />
            ))}
            </div>
        </section>
        </>
    );
}

export const getServerSideProps = withIronSessionSsr(
    async function getServerSideProps({ req }) {
        const user = req.session.user;
    
        return {
            props: {
                user,
            },
        };
    },
    ironOptions
);