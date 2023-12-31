import React from "react";
import Weather from "./projectCards/Weather";
import ExpenseTracker from "../components/projectCards/ExpenseTracker";
import MoviesCards from "../components/projectCards/MoviesCard";
import FoodDelivery from "../components/projectCards/FoodDelivery";
import PhotoMemory from "../components/projectCards/PhotoMemory";
import TaskManager from "./projectCards/TaskManager";
import WhatsappClone from "./projectCards/WhatsappClone";
import Cart from "./projectCards/Cart";
import ShoppingApp from "./projectCards/Shopping";
const Projects = () => {
  return (
    <div className="w-full py-[10rem] px-2 text-white">
      <h1 className="text-3xl text-[#00df9a]" id="projects">
        PROJECTS
      </h1>
      <p className="text-gray-400">
        Here you will find some of the personal projects that I created with
        each project containing its own case study{" "}
      </p>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 my-10">
        <ShoppingApp />
        <WhatsappClone />
        <FoodDelivery />
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 my-10">
        <TaskManager />
        <PhotoMemory />
        <ExpenseTracker />
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 my-10">
        <Cart />
        <MoviesCards />
        <Weather />
      </div>
    </div>
  );
};

export default Projects;
