import { Grid } from "@mui/material";
import React, { FC } from "react";
import Card from "./Card";

const cards = [
  {
    id: 1,
    name: "Volvo",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 2,
    name: "Wolksvagen",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s2",
  },
  {
    id: 3,
    name: "BMW",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s3",
  },
];

const CardsGrid: FC = () => {
  return (
    <Grid container spacing={{ xs: 2, sm: 1 }} sx={{ pt: 3 }}>
      {cards.map((card) => (
        <Grid key={card.id} item xs={12} sm={6} md={4}>
          <Card {...card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardsGrid;
