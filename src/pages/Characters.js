import { Box } from "@mui/system";
import { CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllChars, getMoreChars } from "../redux/slices/characters";
import CharCard from "../components/cards/charCard";
function Characters() {
  const dispatch = useDispatch();
  const charsArr = useSelector((state) => state.characters.data);
  const isLoading = useSelector((state) => state.characters.isLoading);
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
    dispatch(getMoreChars(pageNum));
  }, [pageNum, dispatch]);
  useEffect(() => {
    dispatch(getAllChars());
  }, [dispatch]);
  return (
    <Box justifyContent="center" alignItems="center" m={5}>
      <Grid container spacing={3}>
        <>
          {charsArr.map((char) => {
            return (
              <Grid style={{ display: "grid" }} key={char.id} item xs={3}>
                <CharCard char={char} />
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
        </Box>
      )}
    </Box>
  );
}

export default Characters;
