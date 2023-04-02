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

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json";

interface Waypoint {
  Latitude: string;
  Longitude: string;
  All_motor_vehicles: string;
  Direction_of_travel: string;
  Road_name: string;
  Road_type: string;
}

export default function MapPage() {
  const dataPoints = "http://localhost:3000/waypoints.json";
  const initialViewState = INITIAL_VIEW_STATE;
  const mapStyle = MAP_STYLE;

  const layers = [
    new HeatmapLayer({
      data: dataPoints,
      id: "heatmp-layer",
      pickable: false,
      getPosition: (d: Waypoint) => [+d.Longitude, +d.Latitude],
      getWeight: (d: Waypoint) => +d.All_motor_vehicles,
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
