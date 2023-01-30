import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const EpisodeDetails = () => {
  const { id } = useParams();
  const episode = useSelector((state) =>
    state.episodesSlice.episodes.find((episode) => {
      return episode.id === parseInt(id);
    })
  );

  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        sx={{ marginTop: 3, justifyContent: "center" }}
      >
        <Chip label={`Episode Code: ${episode?.episode}`} />
        <Chip label={`Episode Name: ${episode?.name}`} />
        <Chip label={`Episode Date: ${episode?.air_date}`} />
      </Stack>
      {/* <div style={{ display: "flex", flexWrap: "wrap" }}>{data}</div> */}
    </>
  );
};

export default EpisodeDetails;
