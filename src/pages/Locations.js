import { Box } from "@mui/system";
import { CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLocs, getMoreLocs } from "../redux/slices/locations";
import LocCard from "../components/cards/LocCard";

function Locations() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.locations);
  const [pageNum, setPageNum] = useState(1);
  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 100 >=
      e.target.documentElement.scrollHeight
    ) {
      setPageNum((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (pageNum === 1) return;
    dispatch(getMoreLocs(pageNum));
  }, [pageNum, dispatch]);

  useEffect(() => {
    dispatch(getAllLocs());
  }, [dispatch]);

  return (
    <Box justifyContent="center" alignItems="center" m={5}>
      <Grid container spacing={3}>
        <>
          {data.map((loc) => {
            return (
              <Grid style={{ display: "grid" }} key={loc.id} item xs={3}>
                <LocCard loc={loc} />
              </Grid>
            );
          })}
        </>
      </Grid>
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <CircularProgress />
          {error && <Typography>The is nothing</Typography>}
        </Box>
      )}
    </Box>
  );
}

export default Locations;
