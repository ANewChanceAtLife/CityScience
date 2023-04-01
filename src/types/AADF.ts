export enum AADFKeys {
  ALL_HGVS = "allHgVs",
  ALL_MOTOR_VEHICLES = "allMotorVehicles",
  BUSES_AND_COACHES = "busesAndCoaches",
  CARS_AND_TAXIS = "carsAndTaxis",
  COUNT_POINT_ID = "countPointId",
  DIRECTION_OF_TRAVEL = "directionOfTravel",
  EASTING = "easting",
  END_JUNCTION_ROAD_NAME = "endJunctionRoadName",
  ESTIMATION_METHOD = "estimationMethod",
  ESTIMATION_METHOD_DETAILED = "estimationMethodDetailed",
  HGVS2_RIGID_AXLE = "hgVs2RigidAxle",
  HGVS3_OR4_ARTICULATED_AXLE = "hgVs3Or4ArticulatedAxle",
  HGVS3_RIGID_AXLE = "hgVs3RigidAxle",
  HGVS4_OR_MORE_RIGID_AXLE = "hgVs4OrMoreRigidAxle",
  HGVS5_ARTICULATED_AXLE = "hgVs5ArticulatedAxle",
  HGVS6_ARTICULATED_AXLE = "hgVs6ArticulatedAxle",
  LATITUDE = "latitude",
  LGVS = "lgVs",
  LINK_LENGTH_KM = "linkLengthKm",
  LINK_LENGTH_MILES = "linkLengthMiles",
  LOCAL_AUTHORITY_CODE = "localAuthorityCode",
  LOCAL_AUTHORITY_ID = "localAuthorityId",
  LOCAL_AUTHORITY_NAME = "localAuthorityName",
  LONGITUDE = "longitude",
  NORTHING = "northing",
  PEDAL_CYCLES = "pedalCycles",
  REGION_ID = "regionId",
  REGION_NAME = "regionName",
  REGION_ONS_CODE = "regionOnsCode",
  ROAD_CATEGORY = "roadCategory",
  ROAD_NAME = "roadName",
  ROAD_TYPE = "roadType",
  START_JUNCTION_ROAD_NAME = "startJunctionRoadName",
  TWO_WHEELED_MOTOR_VEHICLES = "twoWheeledMotorVehicles",
  YEAR = "year",
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
