import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { episodesTypes } from "../Episodes/store/type";

const EpisodeDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const episode = useSelector((state) => state.episodesSlice.episode);

  useEffect(() => {
    dispatch({
      type: episodesTypes.GET_EPISODE,
      payload: {
        id: parseInt(id),
      },
    });
  }, []);
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        sx={{ marginTop: 12, justifyContent: "center" }}
      >
        <Chip label={`Episode Code: ${episode?.episode}`} />
        <Chip label={`Episode Name: ${episode?.name}`} />
        <Chip label={`Episode Date: ${episode?.air_date}`} />
      </Stack>
    </>
  );
};

export default EpisodeDetails;
