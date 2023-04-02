"use client";
import { Card, Loader } from "@mantine/core";
import { Map } from "react-map-gl";
import DeckGL from "@deck.gl/react/typed";
import { useHits, useRefinementList } from "react-instantsearch-hooks-web";
import { AADFKeys, FacetStats } from "@/types/AADF";

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json";

const INITIAL_VIEW_STATE = {
  longitude: 0,
  latitude: 0,
  zoom: 10,
  pitch: 0,
  bearing: 0,
};

export default function MapPage() {
  const loading: boolean = false;
  useRefinementList({ attribute: AADFKeys.LATITUDE });
  useRefinementList({ attribute: AADFKeys.LONGITUDE });
  const { results } = useHits();
  const stats: FacetStats = ((results as any) ?? {}).facets_stats ?? {};
  const avgLat = stats[AADFKeys.LATITUDE]?.avg ?? 0;
  const avgLng = stats[AADFKeys.LONGITUDE]?.avg ?? 0;

  console.log("stats", stats);

  if (loading) {
    return (
      <Card>
        <Loader variant="bars" />
      </Card>
    );
  }

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      viewState={{ latitude: avgLat, longitude: avgLng }}
      controller={true}
    >
      <Map
        reuseMaps
        mapboxAccessToken="pk.eyJ1IjoiYW5ld2NoYW5jZWF0bGlmZSIsImEiOiJjbGZ5aGlpY2owNHZtM29tdDVoYmdxOXZ2In0.x3htvrBhTqTpSutniKT5gw"
        mapStyle={MAP_STYLE}
      />
    </DeckGL>
  );
}
