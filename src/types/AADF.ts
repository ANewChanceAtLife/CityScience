export enum AADFKeys {
  COUNT_POINT_ID = "Count_point_id",
  YEAR = "Year",
  REGION_ID = "Region_id",
  REGION_NAME = "Region_name",
  REGION_ONS_CODE = "Region_ons_code",
  LOCAL_AUTHORITY_ID = "Local_authority_id",
  LOCAL_AUTHORITY_NAME = "Local_authority_name",
  LOCAL_AUTHORITY_CODE = "Local_authority_code",
  ROAD_NAME = "Road_name",
  ROAD_CATEGORY = "Road_category",
  ROAD_TYPE = "Road_type",
  START_JUNCTION_ROAD_NAME = "Start_junction_road_name",
  END_JUNCTION_ROAD_NAME = "End_junction_road_name",
  EASTING = "Easting",
  NORTHING = "Northing",
  LATITUDE = "Latitude",
  LONGITUDE = "Longitude",
  LINK_LENGTH_KM = "Link_length_km",
  LINK_LENGTH_MILES = "Link_length_miles",
  ESTIMATION_METHOD = "Estimation_method",
  ESTIMATION_METHOD_DETAILED = "Estimation_method_detailed",
  DIRECTION_OF_TRAVEL = "direction_of_travel",
  PEDAL_CYCLES = "Pedal_cycles",
  TWO_WHEELED_MOTOR_VEHICLES = "Two_wheeled_motor_vehicles",
  CARS_AND_TAXIS = "Cars_and_taxis",
  BUSES_AND_COACHES = "Buses_and_coaches",
  LGVS = "LGVs",
  HGVS_2_RIGID_AXLE = "HGVs_2_rigid_axle",
  HGVS_3_RIGID_AXLE = "HGVs_3_rigid_axle",
  HGVS_4_OR_MORE_RIGID_AXLE = "HGVs_4_or_more_rigid_axle",
  HGVS_3_OR_4_ARTICULATED_AXLE = "HGVs_3_or_4_articulated_axle",
  HGVS_5_ARTICULATED_AXLE = "HGVs_5_articulated_axle",
  HGVS_6_ARTICULATED_AXLE = "HGVs_6_articulated_axle",
  ALL_HGVS = "All_HGVs",
  ALL_MOTOR_VEHICLES = "All_motor_vehicles",
  OBJECT_ID = "objectID",
}

export interface AADF {
  allHgVs: number;
  allMotorVehicles: number;
  busesAndCoaches: number;
  carsAndTaxis: number;
  countPointId: number;
  directionOfTravel: string;
  easting: number;
  endJunctionRoadName: string;
  estimationMethod: string;
  estimationMethodDetailed: string;
  hgVs2RigidAxle: number;
  hgVs3Or4ArticulatedAxle: number;
  hgVs3RigidAxle: number;
  hgVs4OrMoreRigidAxle: number;
  hgVs5ArticulatedAxle: number;
  hgVs6ArticulatedAxle: number;
  latitude: number;
  lgVs: number;
  linkLengthKm: number;
  linkLengthMiles: number;
  localAuthorityCode: string;
  localAuthorityId: number;
  localAuthorityName: string;
  longitude: number;
  northing: number;
  pedalCycles: number;
  regionId: number;
  regionName: string;
  regionOnsCode: string;
  roadCategory: string;
  roadName: string;
  roadType: string;
  startJunctionRoadName: string;
  twoWheeledMotorVehicles: number;
  year: number;
}

export interface Stats {
  avg: number;
  min: number;
  max: number;
  sum: number;
}

export type FacetStats = Record<AADFKeys, Stats>;
