"use client";

import React from "react";
import { Map } from "react-map-gl";
import maplibregl from "maplibre-gl";
import DeckGL from "@deck.gl/react";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";

import styles from "./page.module.css";
import { Card } from "@mantine/core";

const INITIAL_VIEW_STATE = {
  longitude: -4,
  latitude: 54.4629072,
  zoom: 5,
  pitch: 45,
  bearing: 0,
};

const DATA_POINTS = "http://localhost:3000/api/trips";

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json";

interface Trip {
  Coordinates: number[][];
  Avg_Traffic: number;
  id: string;
}

export default function MapPage() {
  const initialViewState = INITIAL_VIEW_STATE;
  const mapStyle = MAP_STYLE;

  const layers = [
    new HeatmapLayer({
      data: DATA_POINTS,
      id: "heatmp-layer",
      pickable: false,
      getPosition: (d: Trip) => d.Coordinates[0],
      getWeight: (d: Trip) => +d.Avg_Traffic,
      radiusPixels: 30,
      intensity: 1,
      threshold: 0.03,
    }),
  ];

  return (
    <Card className={styles.map}>
      <DeckGL
        layers={layers}
        initialViewState={initialViewState}
        controller={true}
      >
        <Map reuseMaps mapLib={maplibregl} mapStyle={mapStyle} />
      </DeckGL>
    </Card>
  );
}
