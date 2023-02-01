import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Button, Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { locationTypes } from "./store/type";
import LocationsCard from "./LocationsCard";
import CustomPagination from "../components/Pagination";

const Locations = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("")
  const locations = useSelector((state) => state.locationsSlice.locations);
  const info = useSelector((state)=>state.locationsSlice.info)

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      dispatch({
        type: locationTypes.GET_LOCATION,
        payload: {
          search: values.search,
          page: 1,
        },
      });
      setSearch(values.search);
    },
  });


  const data = locations.map((location, index) => {
    return <LocationsCard
      key={index}
      locationID={location.id}
      name={location.name}
      type={location.type}
      dimension={location.dimension}
    />
  });
  useEffect(() => {
    dispatch({
      type: locationTypes.GET_LOCATION,
      payload: {
        search: "",
        page: 1,
      },
    });
  }, []);
  return (
    <div>
      <Input placeholder="search" name="search" onChange={handleChange}/>
      <Button type="submit" onClick={handleSubmit}>
        Search
      </Button>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop:12 }}>{data}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {info?.next === "" ? null : (
          <CustomPagination
            count={info?.pages}
            page={1}
            search={search}
            stage={info?.stage}
          />
        )}
      </div>
    </div>
  );
};

export default Locations;
