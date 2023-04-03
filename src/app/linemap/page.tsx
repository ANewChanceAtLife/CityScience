"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Map } from "react-map-gl";
import maplibregl from "maplibre-gl";
import { AmbientLight, PointLight, LightingEffect } from "@deck.gl/core";
import DeckGL from "@deck.gl/react";
import { TripsLayer } from "@deck.gl/geo-layers";
import { blend_colors } from "../utils/colors";
import { random } from "lodash";

const ambientLight = new AmbientLight({
  color: [255, 255, 255],
  intensity: 1.0,
});

const pointLight = new PointLight({
  color: [255, 255, 255],
  intensity: 2.0,
  position: [-74.05, 40.7, 8000],
});

const lightingEffect = new LightingEffect({ ambientLight, pointLight });

const material = {
  ambient: 0.1,
  diffuse: 0.6,
  shininess: 32,
  specularColor: [60, 64, 70],
};

const DEFAULT_THEME = {
  buildingColor: [74, 80, 87],
  trailColor0: [253, 128, 93],
  trailColor1: [23, 184, 190],
  material,
  effects: [lightingEffect],
};

const INITIAL_VIEW_STATE = {
  longitude: -4,
  latitude: 54.4629072,
  zoom: 5,
  pitch: 45,
  bearing: 0,
};

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json";

// const COLOR_SCALE = scaleThreshold().domain([117, 73115.2]); //.range([0, 1]);
const getPercent = (value: number) =>
  (100 * (value - 117.95833333333333)) / (73115.2 - 117.95833333333333) / 100;

export default function Linemap() {
  const [time, setTime] = useState(0);
  const [animation] = useState<any>({});

  const trailLength = 1000;
  const initialViewState = INITIAL_VIEW_STATE;
  const mapStyle = MAP_STYLE;
  const theme = DEFAULT_THEME;
  const loopLength = 2500; // unit corresponds to the timestamp in source data
  const animationSpeed = 1;

  const animate = useCallback(() => {
    setTime((t) => (t + animationSpeed) % loopLength);
    animation.id = window.requestAnimationFrame(animate);
  }, [animation]);

  useEffect(() => {
    animation.id = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(animation.id);
  }, [animate, animation]);

  const layers = [
    new TripsLayer({
      id: "trips",
      data: `${process.env.NEXT_PUBLIC_API_URL}/trips`,
      getPath: (d: any) => d.Coordinates,
      getTimestamps: (d: any) => {
        const min = random(0, 2000);
        const max = random(min, 2000);
        return [min, max];
      },
      getColor: (d: any) => {
        const percent = getPercent(d.Avg_Traffic);
        return blend_colors("#00FF00", "#FF0000", percent);
      },
      opacity: 0.8,
      widthMinPixels: 4,
      rounded: true,
      trailLength,
      currentTime: time,
      shadowEnabled: false,
    }),
  ];

  return (
    <DeckGL
      layers={layers}
      effects={theme.effects}
      initialViewState={initialViewState}
      controller={true}
    >
      <Map reuseMaps mapLib={maplibregl} mapStyle={mapStyle} />
    </DeckGL>
  );
}
