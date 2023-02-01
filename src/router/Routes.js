import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "../layout/SideBar";
import Characters from "../pages/Characters/Characters";
import EpisodeDetails from "../pages/Episodes/EpisodeDetails";
import Episodes from "../pages/Episodes/Episodes";
import LocationDetails from "../pages/Locations/LocationDetails";
import Locations from "../pages/Locations/Locations";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SideBar />}>
        <Route index element={<Characters />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<EpisodeDetails />} />
        <Route path="/locations/:id" element={<LocationDetails />} />
      </Route>
    </Routes>
  );
};

export default Router;
