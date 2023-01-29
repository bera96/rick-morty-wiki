import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Button, Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { characterTypes } from "./store/type";
import Card from "../components/Card";
import CustomPagination from "../components/Pagination";

const Characters = () => {
  const characters = useSelector((state) => state.characterSlice.characters);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("")
  const {handleSubmit, handleChange} = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      dispatch({
        type: characterTypes.GET_CHAR,
        payload: {
          search: values.search,
          page: 1,
        },

      })
      setSearch(values.search)
    },
  });
  // const [value] = useDebounce(text, 1000);
  const info = useSelector((state) => state.characterSlice.info);
  const data = characters.map((character, index) => {
    return (
      <Card
        key={index}
        image={character.image}
        name={character.name}
        species={character.species}
        gender={character.gender}
        origin={character.origin.name}
      />
    );
  });
  useEffect(() => {
    dispatch({
      type: characterTypes.GET_CHAR,
      payload: {
        search: "",
        page: "",
      },
    });
  }, [dispatch]);

  useEffect(() => {
    console.log(characters, "characters");
    console.log(info, "info info");
    // console.log(info.next.split("=")[1])
  }, [characters, info]);

  return (
    <div>
      <Input placeholder="search" name="search" onChange={handleChange} />
      <Button type="submit" onClick={handleSubmit}>
        Search
      </Button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>{data}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {info?.next === "" ? null : (
          <CustomPagination count={info?.pages} page={1} search={search} />
        )}
      </div>
    </div>
  );
};

export default Characters;
