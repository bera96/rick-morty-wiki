import React, { useEffect, useState } from "react";
import { Button, Input } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { episodesTypes } from "../Episodes/store/type";
import EpisodesCard from "./EpisodesCard";
import CustomPagination from "../components/Pagination";

const Episodes = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const episodes = useSelector((state) => state.episodesSlice.episodes);
  const info = useSelector((state) => state.episodesSlice.info);
  const data = episodes.map((episode, index) => {
    return (
      <EpisodesCard
        key={index}
        episode={episode.episode}
        name={episode.name}
        date={episode.air_date}
      />
    );
  });
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      dispatch({
        type: episodesTypes.GET_EPISODES,
        payload: {
          search: values.search,
          page: 1,
        },
      });
      setSearch(values.search);
    },
  });

  useEffect(() => {
    dispatch({
      type: episodesTypes.GET_EPISODES,
      payload: {
        search: "",
        page: 1,
      },
    });
  }, [dispatch]);

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

export default Episodes;
