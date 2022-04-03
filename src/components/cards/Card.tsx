import React, { FC } from "react";
import { Card, CardContent, Divider, Typography } from "@mui/material";

interface CarCardProps {
  name: string;
  excerpt: string;
}

const CarCard: FC<CarCardProps> = ({ name, excerpt }) => {
  return (
    <Card sx={{ boxShadow: "0 0 5px rgba(0,0,0, .4)" }}>
      <CardContent>
        <Typography variant="h4">{name} </Typography>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Typography>{excerpt}</Typography>
      </CardContent>
    </Card>
  );
};

export default CarCard;
