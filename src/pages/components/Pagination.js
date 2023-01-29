import React, { useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { characterTypes } from "../Characters/store/type";

const CustomPagination = (props) => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const handleChange = (event, value) => {
    setPage(value)
  };
  useEffect(() => {
    console.log(props, "props");
    dispatch({
        type: characterTypes.GET_CHAR,
        payload: {
          search: props.search == "" ? "" : props.search,
          page: page,
        },
      });
  }, [page]);

  return (
    <Stack spacing={2}>
      <Pagination
        count={props.count}
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default CustomPagination;
