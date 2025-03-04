export type IFPLId = string; // UALPHA{2}DIGIT{8}
export type FlightDataset = 'flight' | 'flightPlan' | 'flightPlanHistory';
export type FlightIdentificationInput = { id: IFPLId } | { keys: FlightKeys };
export interface FlightIdentificationOutput {
  id?: IFPLId;
  keys?: FlightKeys;
}
export type AircraftICAOId = string; // (ALPHA|DIGIT){2,7}
export type ExtendedAircraftICAOId = string; // (ALPHA|DIGIT|$|#){2,7}
export type AircraftRegistrationMark = string; // (ALPHA|DIGIT|'|+|=|?|.|/|:| ){1,50}
export type ICAOAircraftAddress = string; // HEXA{6}
export type SSRCode = string; // DIGIT{4}
export type SSRMode = 'A'; // Mode A only
export type AircraftTypeICAOId = string; // ALPHA{1}(ALPHA|DIGIT){1,3}
export type OtherAircraftTypeDesignation_DataType = string; // ANY{1,60}
export type AircraftOperatorICAOId = string; // ALPHA{3}
export type AircraftIATAId = string; // (UALPHA|DIGIT){2}(UALPHA|DIGIT|*){0,1}DIGIT{3,4}UALPHA{0,1}

export type FlightTrend = 'CLIMB' | 'CRUISE' | 'DESCENT' | 'NONE';

export type FlightState =
  | 'ATC_ACTIVATED'
  | 'CANCELLED'
  | 'FILED'
  | 'FILED_SLOT_ALLOCATED'
  | 'FILED_SLOT_ISSUED'
  | 'PLANNED'
  | 'PLANNED_REROUTED'
  | 'PLANNED_SLOT_ALLOCATED'
  | 'PLANNED_SLOT_ALLOCATED_REROUTED'
  | 'TACT_ACTIVATED'
  | 'TERMINATED';

export type ATFMMessageType =
  | 'DES'
  | 'ERR'
  | 'FCM'
  | 'FLS'
  | 'FUM'
  | 'REA'
  | 'RFI'
  | 'RJT'
  | 'RRN'
  | 'RRP'
  | 'SAM'
  | 'SIP'
  | 'SLC'
  | 'SMM'
  | 'SPA'
  | 'SJR'
  | 'SRM'
  | 'SWM'
  | 'UNK';

import { Duration } from 'moment';
import {
  AerodromeICAOId,
  FlightLevel,
  TerminalProcedure,
  AirSpeed,
  NetworkAddress,
  FlightPlanProcessing,
  RestrictionId,
  LoadState,
  AerodromeIATAId,
  RouteOrTerminalProcedure,
  ICAOPoint,
  AirspaceId,
  AirspaceType,
  TrafficVolumeId,
  RunwayId,
  PublishedPointId,
  AerodromeOrPublishedPointId,
  NonPublishedPoint,
  FIRICAOId,
} from '../Airspace/types';

import {
  DateTimeMinute,
  DurationHourMinute,
  DurationMinute,
  DurationHourMinuteSecond,
  DateTimeSecond,
  ShiftHourMinute,
  ReceivedOrSent,
  DistanceM,
  DistanceNM,
  AirNavigationUnitId,
  TimeHourMinutePeriod,
  DateTimeMinutePeriod,
  Dataset,
  Reply,
  NMSet,
  NMList,
  Position as CommonPosition,
  WeightKg,
  FlightLevelM,
} from '../Common/types';

import {
  RegulationId,
  FlightRegulationLocation,
  FlightAtfcmMeasureLocation,
  RegulationCause,
  FlightHotspotLocation,
  FlightMCDMInfo,
  OtmvStatus,
  CountsInterval,
  CountsCalculationType,
  FlowId,
  MeasureId,
  TrafficVolumeScenarios,
} from '../Flow/types';

export interface FlightKeys {
  aircraftId: ExtendedAircraftICAOId;
  aerodromeOfDeparture?: AerodromeICAOId;
  nonICAOAerodromeOfDeparture?: boolean;
  airFiled: boolean;
  aerodromeOfDestination?: AerodromeICAOId;
  nonICAOAerodromeOfDestination?: boolean;
  estimatedOffBlockTime: DateTimeMinute;
}

export interface TimeAndModel {
  model: TrafficType;
  time: DateTimeMinute;
}

export type TrafficType = 'DEMAND' | 'LOAD' | 'REGULATED_DEMAND';

export type FlightField =
  | 'actualOffBlockTime'
  | 'actualTakeOffTime'
  | 'actualTimeOfArrival'
  | 'aircraftAddress'
  | 'aircraftOperator'
  | 'aircraftType'
  | 'alternateAerodromes'
  | 'apiSubmissionRules'
  | 'applicableScenarios'
  | 'arrivalInformation'
  | 'atfcmMeasureLocations'
  | 'avoidedRegulations'
  | 'calculatedOffBlockTime'
  | 'calculatedTakeOffTime'
  | 'calculatedTimeOfArrival'
  | 'caughtInHotspots'
  | 'ccamsSSRCode'
  | 'cdm'
  | 'cdmEstimatedOffBlockTime'
  | 'cfmuFType'
  | 'compareWithOtherTrafficType'
  | 'confirmedCTFM'
  | 'ctfmAirspaceProfile'
  | 'ctfmPointProfile'
  | 'ctfmRequestedFLevels'
  | 'ctfmRestrictionProfile'
  | 'ctotLimitReason'
  | 'ctotShiftAlreadyAppliedByTower'
  | 'currentDepartureTaxiTimeAndProcedure'
  | 'defaultReroutingRequestedFLevel'
  | 'defaultReroutingRequestedSpeed'
  | 'delay'
  | 'delayCharacteristics'
  | 'departureTolerance'
  | 'divertedAerodromeOfDestination'
  | 'equipmentCapabilityAndStatus'
  | 'estimatedElapsedTime'
  | 'estimatedTakeOffTime'
  | 'estimatedTimeOfArrival'
  | 'excludedRegulations'
  | 'exclusionFromRegulations'
  | 'exemptedFromRegulations'
  | 'famStatus'
  | 'filedRegistrationMark'
  | 'filingRule'
  | 'fCriticality'
  | 'fDataVersionNr'
  | 'fHistory'
  | 'fLevelAtReferenceLocationEntry'
  | 'fLevelAtReferenceLocationExit'
  | 'fState'
  | 'ftfmAirspaceProfile'
  | 'ftfmPointProfile'
  | 'ftfmRequestedFLevels'
  | 'ftfmRestrictionProfileLevel'
  | 'fuelConsumptionIndicator'
  | 'hasBeenForced'
  | 'hasOtherRegulations'
  | 'highestModelAirspaceProfile'
  | 'highestModelPointProfile'
  | 'highestModelRestrictionProfile'
  | 'hotspots'
  | 'icaoRoute'
  | 'initialFPLMessageOriginator'
  | 'isProposalF'
  | 'lastATFMMessageOriginator'
  | 'lastATFMMessageReceivedOrSent'
  | 'lastATFMMessageType'
  | 'lastFPLMessageOriginatorLevel'
  | 'lastKnownPosition'
  | 'lateFiler'
  | 'lateUpdater'
  | 'mcdmInfo'
  | 'minimumRequestedRVR'
  | 'mostPenalisingRegulation'
  | 'mostPenalisingRegulationCause'
  | 'newRouteMinShiftDelayImprovement'
  | 'oceanicReroute'
  | 'operatingAircraftOperator'
  | 'operationalLog'
  | 'profileValidity'
  | 'proposalInformation'
  | 'readyEstimatedOffBlockTime'
  | 'readyStatus'
  | 'regulationLocations'
  | 'requestedFLevel'
  | 'requestedInitialFLevel'
  | 'requestedInitialSpeed'
  | 'reroutable'
  | 'reroutingIndicator'
  | 'reroutingOpportunitiesExist'
  | 'revisionTimes'
  | 'routeChargeIndicator'
  | 'routeLength'
  | 'rtfmAirspaceProfile'
  | 'rtfmPointProfile'
  | 'rtfmRequestedFLevelsLevel'
  | 'rtfmRestrictionProfile'
  | 'runwayVisualRange'
  | 'slotIssued'
  | 'slotSwapCandidateList'
  | 'slotSwapCounter'
  | 'slotZone'
  | 'suspensionInfo'
  | 'suspensionStatus'
  | 'targetTimeOverFix'
  | 'taxiTime'
  | 'timeAtReferenceLocationEntry'
  | 'timeAtReferenceLocationExit'
  | 'trendAtReferenceLocationEntry'
  | 'trendAtReferenceLocationExit'
  | 'trendAtReferenceLocationMiddle'
  | 'turnFForLocation'
  | 'wakeTurbulenceCategory'
  | 'worstLoadStateAtReferenceLocation'
  | 'yoyoFForLocation';

export type FlightExchangeModel = 'FIXM' | 'NM_B2B';

export type FlightPlanOutput = { structured: StructuredFlightPlan };

export interface BasicTrajectoryData {
  takeOffWeight?: WeightKg;
  topOfClimb?: Array<Relative4DPoint>;
  topOfDescent?: Array<Relative4DPoint>;
  bottomOfClimb?: Array<Relative4DPoint>;
  bottomOfDescent?: Array<Relative4DPoint>;
  distanceAtLocationInfo?: DistanceAtLocation;
}

export type DistanceAtLocation = {
  adesDAL?: AerodromeDAL;
  dalPoints?: Array<PointDAL>;
};

export type PointDAL = {
  point: ICAOPoint;
  cumulativeDistance: DistanceM;
};

export type AerodromeDAL = {
  aerodrome: AerodromeICAOId;
  cumulativeDistance: DistanceM;
};

export type Relative4DPoint = {
  cumulativeDistance: DistanceM;
  altitude: FlightLevelM;
  elapsedTime: Duration;
};

export interface DepartureData {
  taxiTime: DurationMinute;
}

export type FIXMFlight = object; // aero.fixm.flight._4.FlightType
export interface StructuredFlightPlan {
  flightPlan?: FlightPlan;
  basicTrajectoryData?: BasicTrajectoryData;
  departureData?: DepartureData;
}

export type FlightPlanHistory = {
  infos?: Array<FlightPlanHistoryInfo>;
};

export type FlightPlanHistoryInfo = {
  timeStamp?: DateTimeSecond;
  checkPoint?: string;
  mode?: string;
  msgIn?: string;
  msgOut?: string;
  addresses?: Array<string>;
  detail?: string;
};
export interface Flight {
  flightId: FlightIdentificationOutput;
  divertedAerodromeOfDestination?: AerodromeICAOId;
  aircraftType?: AircraftTypeICAOId;
  readyEstimatedOffBlockTime?: DateTimeMinute;
  cdmEstimatedOffBlockTime?: DateTimeMinute;
  calculatedOffBlockTime?: DateTimeMinute;
  actualOffBlockTime?: DateTimeMinute;
  revisionTimes?: {
    timeToInsertInSequence?: DurationHourMinute;
    timeToRemoveFromSequence?: DurationHourMinute;
  };
  estimatedTakeOffTime?: DateTimeMinute;
  calculatedTakeOffTime?: DateTimeMinute;
  actualTakeOffTime?: DateTimeMinute;
  ctotShiftAlreadyAppliedByTower?: ShiftHourMinute;
  requestedFlightLevel?: FlightLevel;
  taxiTime?: DurationHourMinute;
  currentDepartureTaxiTimeAndProcedure?: TaxiTimeAndProcedure;
  estimatedTimeOfArrival?: DateTimeMinute;
  calculatedTimeOfArrival?: DateTimeMinute;
  actualTimeOfArrival?: DateTimeMinute;
  lateFilter?: boolean;
  lateUpdater?: boolean;
  suspensionStatus?: SuspensionStatus;
  suspensionInfo?: string;
  famStatus?: FAMStatus;
  readyStatus?: ReadyStatus;
  aircraftOperator?: AircraftOperatorICAOId;
  operatingAircraftOperator?: AircraftOperatorICAOId;
  reroutingIndicator?: ReroutingIndicator;
  newRouteMinShiftDelayImprovement?: DurationHourMinute;
  reroutable?: 'CANNOT_BE_REROUTED' | 'TRY_ALLOWED' | 'TRY_AND_APPLY_ALLOWED';
  reroutingOpportunitiesExist?: boolean;
  cdm?: CDM;
  slotIssued?: boolean;
  proposalInformation?: ProposalInformation;
  timeAtReferenceLocationEntry?: TimeAndModel;
  timeAdReferenceLocationExit?: TimeAndModel;
  flightLevelAtReferenceLocationEntry?: FlightLevel;
  flightLevelAtReferenceLocationExit?: FlightLevel;
  trendAtReferenceLocationEntry?: FlightTrend;
  trendAtReferenceLocationExit?: FlightTrend;
  trendAtReferenceLocationMiddle?: FlightTrend;
  exemptedFromRegulations?: boolean;
  delay?: DurationHourMinute;
  delayCharacteristics?: 'ADJUSTED_TO_CLOCK' | 'EXCEEDS_DELAY_CONFIRMATION';
  mostPenalisingRegulation?: RegulationId;
  hasOtherRegulations?: boolean;
  regulationLocations?: FlightRegulationLocation[];
  atfcmMeasureLocations?: FlightAtfcmMeasureLocation[];
  lastATFMMessageType?: ATFMMessageType;
  lastATFMMessageReceivedOrSent?: ReceivedOrSent;
  runwayVisualRange?: DistanceM;
  minimumRequestedRVR?: DistanceM;
  confirmedCTFM?: DistanceNM;
  exclusionFromRegulations?: ExclusionFromRegulations;
  requestedInitialFlightLevel?: FlightLevel;
  requestedInitialSpeed?: AirSpeed;
  estimatedElapsedTime?: DurationHourMinute;
  filingRule?:
    | 'FILING_ALLOWED_BY_AO_CFMU'
    | 'NOT_AUTHORISED'
    | 'OPERATOR_MUST_REFILE';
  initialFPLMessageOritinator?: MessageOriginator;
  lastFPLMessageOriginator?: MessageOriginator;
  icaoRoute?: string;
  routeLength?: DistanceNM;
  defaultReroutingRequestedFlightLevel?: FlightLevel;
  defaultReroutingRequestedSpeed?: AirSpeed;
  departureTolerance?: DepartureTolerance;
  mostPenalisingRegulationCause?: RegulationCause;
  lastATFMMessageOriginator?: MessageOriginator;
  ftfmPointProfile?: FlightPoint[];
  rtfmPointProfile?: FlightPoint[];
  ctfmPointProfile?: FlightPoint[];
  ftfmAirspaceProfile?: FlightAirspace[];
  rtfmAirspaceProfile?: FlightAirspace[];
  ctfmAirspaceProfile?: FlightAirspace[];
  ftfmRequestedFlightLevels?: RequestedFlightLevel[];
  rtfmRequestedFlightLevels?: RequestedFlightLevel[];
  ctfmRequestedFlightLevels?: RequestedFlightLevel[];
  flightHistory?: FlightEvent[];
  operationalLog?: FlightOperationalLogEntry[];
  equipmentCapabilityAndStatus?: EquipmentCapabilityAndStatus;
  ftfmRestrictionProfile?: FlightRestriction[];
  rtfmRestrictionProfile?: FlightRestriction[];
  ctfmRestrictionProfile?: FlightRestriction[];
  cmfuFlightType?: CfmuFlightType;
  ccamsSSRCode?: SSRCode;
  filedRegistrationMark?: AircraftRegistrationMark;
  isProposalFlight?: boolean;
  proposalExists?: boolean;
  hasBeenForced?: boolean;
  caughtInHotspots?: number;
  hotspots?: FlightHotspotLocation[];
  mcdmInfo?: FlightMCDMInfo;
  worstLoadStateAtReferenceLocation?: LoadStateAtReferenceLocation;
  compareWithOtherTrafficType?: DeltaEntry;
  ctotLimitReason?: CTOTLimitReason;
  profileValidity?: ProfileValidity;
  targetTimeOverFix?: TargetTime;
  flightState?: FlightState;
  lastKnownPosition?: FourDPosition;
  slotSwapCounter: {
    // SlotSwapCounter,
    currentCounter: number;
    maxLimit: number;
  };
  slotSwapCandidateList?: NMList<{
    // SlotSwapCandidate,
    ifplId: IFPLId;
    subjectDeltaDelayMinutes: number;
    cadidateDeltaDelayMinutes: number;
    swapDecideByTime: DateTimeMinute;
  }>;
  aircraftAddress?: ICAOAircraftAddress;
  arrivalInformation?: ArrivalInformation;
  slotZone?: {
    // SlotZone,
    beforeCTO: DurationMinute;
    afterCTO: DurationMinute;
  };
  flightDataVersionNr?: number; // FlightDataVersionNumber
  applicableScenarios?: NMList<TrafficVolumeScenarios>;
  apiSubmissionRules?: APISubmissionRules;
  avoidedRegulations?: NMSet<RegulationId>;
  routeChargeIndicator?: number;
  fuelConsumptionIndicator?: number;
  excludedRegulations?: NMSet<RegulationId>;
  yoyoFlightForLocation?: YoYoFlightForLocation;
  turnFlightForLocation?: TurnFlightForLocation;
  wakeTurbulenceCategory?: WakeTurbulenceCategory;
  alternateAerodromes?: NMList<AerodromeICAOId>;
  flightCriticality?: FlightCriticalityIndicator;
  oceanicRoute?: boolean;
}

export type APISubmissionRules = {
  latestSubmissionTargetTakeOffAPI?: DateTimeMinute;
  earliestSubmissionTargetTimeOverAPI?: DateTimeMinute;
};

export type WakeTurbulenceCategory = 'HEAVY' | 'LIGHT' | 'MEDIUM' | 'SUPER';

export type FlightCriticalityIndicator = {
  kind: FlightCriticalityKind;
  comment?: string;
};

export type FlightCriticalityKind =
  | 'CRITICAL_DUE_TO_AIRFRAME_UTILISATION'
  | 'CRITICAL_DUE_TO_AIRPORT_CLOSURE'
  | 'CRITICAL_DUE_TO_CREW_TIME'
  | 'CRITICAL_DUE_TO_NOISE_ABATEMENT'
  | 'CRITICAL_DUE_TO_OTHER_REASONS'
  | 'CRITICAL_DUE_TO_PASSENGER_CONNECTIONS'
  | 'CRITICAL_DUE_TO_PASSENGER_DELAY_COMPENSATION'
  | 'CRITICAL_DUE_TO_TURNAROUND_CRITICAL';

export type TurnFlightForLocation = {
  ftfmTurn: TurnFlightForLocationKind;
  locationModelTurnKind: TurnFlightForLocationKind;
};

export type TurnFlightForLocationKind =
  | 'CRITICAL_ELSEWHERE'
  | 'CRITICAL_INSIDE'
  | 'CRITICAL_SHARP_TURN'
  | 'NON_CRITICAL_ELSEWHERE'
  | 'NON_CRITICAL_INSIDE'
  | 'NON_CRITICAL_SHARP_TURN'
  | 'NO_SHARP_TURN';

export type YoYoFlightForLocation = {
  ftfmYoYo: YoYoFlightForLocationKind;
  locationModelYoYoKind: YoYoFlightForLocationKind;
};

export type YoYoFlightForLocationKind =
  | 'CRITICAL_COMPLETELY_INSIDE'
  | 'CRITICAL_ELSEWHERE'
  | 'CRITICAL_ENDS_INSIDE'
  | 'CRITICAL_STARTS_INSIDE'
  | 'CRITICAL_YOYO'
  | 'LOCATION_INSIDE_CRITICAL'
  | 'LOCATION_INSIDE_NON_CRITICAL'
  | 'NON_CRITICAL_COMPLETELY_INSIDE'
  | 'NON_CRITICAL_ELSEWHERE'
  | 'NON_CRITICAL_ENDS_INSIDE'
  | 'NON_CRITICAL_STARTS_INSIDE'
  | 'NON_CRITICAL_YOYO'
  | 'NO_YOYO';

export type ArrivalInformation = {
  flightStatusInbound?: ATVFlightStatusInbound;
  registrationMark?: AircraftRegistrationMark;
  aircraftType?: AircraftTypeICAOId;
  aicraftIATAId?: AircraftIATAId;
  arrivalTaxiTime?: DurationHourMinute;
  apiArrivalProcedure?: TerminalProcedure;
  nmArrivalProcedure?: TerminalProcedure;
  initialApproachFix?: PublishedPointId;
  arrivalRunway?: RunwayId;
  arrivalTerminal?: TerminalOrApronStandName;
  arrivalApronStand?: TerminalOrApronStandName;
  minimumTurnaroundTime?: DurationHourMinute;
  landingTime?: DateTimeMinute;
  scheduledInBlockTime?: DateTimeMinute;
  inBlockTime?: DateTimeMinute;
  airportSlotArrival?: DateTimeMinute;
  impactSeverityIndicator?: ImpactSeverityIndicator;
  coordinationFix?: AerodromeOrPublishedPointId;
  targetTimeOver?: DateTimeMinute;
  earliestTargetTimeOver?: DateTimeMinute;
  consolidatedTargetTimeOver?: DateTimeMinute;
  calculatedTimeOver?: DateTimeMinute;
  regulationId?: RegulationId;
  minCalculatedTimeOver?: DateTimeMinute;
  maxCalculatedTimeOver?: DateTimeMinute;
  estimatedOrActualTimeOver?: DateTimeMinute;
};

export type ImpactSeverityIndicator = 'E' | 'EI' | 'L' | 'LI' | 'LIP' | 'OT';

export type ProposalInformation = {
  proposalKink: ProposalKind;
  responseBy: DateTimeMinute;
  proposedCTOT?: DateTimeMinute;
  routeId?: ReroutingRouteId;
};

export type ReroutingRouteId = {
  routeType: ReroutingRouteType;
  standardRouteId: StandardRouteId;
};

export type StandardRouteId = {
  from: AerodromeICAOId;
  to: AerodromeICAOId;
  seqNr: number;
};

export type ReroutingRouteType = 'GENERATED' | 'STANDARD' | 'USER' | 'VERTICAL';

export type ProposalKind = 'DELAY_CONF' | 'RRP' | 'RVR' | 'SIP' | 'STAM_SLOT';

export type MessageOriginator =
  | { airNavigationUnitId: AirNavigationUnitId }
  | { address: NetworkAddress };

export type TaxiTimeAndProcedure = {
  taxiTime: DurationHourMinute;
  terminalProcedure?: TerminalProcedure;
};

export type SuspensionStatus =
  | 'AIRPORT_SUSPENSION'
  | 'DELAY_CONFIRMATION'
  | 'FLIGHT_PLAN_REVALIDATION'
  | 'MANUAL_SUSPENSION'
  | 'NOT_REPORTED_AS_AIRBORNE'
  | 'NOT_SUSPENDED'
  | 'REGULATION_CONFIRMATION'
  | 'SLOT_MISSED'
  | 'TRAFFIC_VOLUMES_CONDITION'
  | 'V_MANUAL_SUSPENSION';

export type FAMStatus =
  | 'AIRBORNE_WHEN_SHIFTED_BY_FAM'
  | 'AIRBORNE_WHEN_SUSPENDED_BY_FAM'
  | 'NOT_UNDER_FAM'
  | 'SHIFTED_BY_FAM'
  | 'SUBJECT_TO_FAM'
  | 'SUSPENDED_BY_FAM'
  | 'WAS_SHIFTED_BY_FAM'
  | 'WAS_SUBJECT_TO_FAM'
  | 'WAS_SUSPENDED_BY_FAM';

export interface ReadyStatus {
  readyForImprovement?: boolean;
  readyToDepart: boolean;
  revisedTaxiTime?: DurationHourMinute;
}

export interface ReroutingIndicator {
  rerouted: boolean;
  reason?: ReroutingReason;
  state?: ReroutingState;
}

export type ReroutingReason =
  | 'AO'
  | 'ATC_PURPOSE_PROPOSAL'
  | 'ATFCM_PURPOSE_PROPOSAL'
  | 'ATFM_EXECUTED'
  | 'CDR_OPPORTUNITY_PROPOSAL'
  | 'FLIGHT_EFFICIENCY_PURPOSE_PROPOSAL'
  | 'STAM_PURPOSE_PROPOSAL';

export type ReroutingState =
  | 'EXECUTED'
  | 'NO_MATCH'
  | 'PRODUCED'
  | 'REJECTED'
  | 'REVOKED'
  | 'TIMED_OUT';

export type OtherAerodromeDesignation = {
  aerodromeName?: string; // AerodromeName_DataType
  aerodromeLocation?: NonPublishedPoint;
  firstLastRoutePoint?: ICAOPoint;
};

export type Aerodrome =
  | {
      icaoId: AerodromeICAOId;
    }
  | { otherDesignation: OtherAerodromeDesignation };

export interface AirFiledData {
  atsUnitId?: AtsUnitId_DataType;
  startingPoint: ICAOPoint;
  clearedLevel: FlightLevel;
  estimatedTimeOver: DateTimeSecond;
}

export type AtsUnitId_DataType = string; // ANY{1,50}

export interface AlternateAerodrome {
  icaoId: AerodromeICAOId;
  nameLocationDescription: string; // AerodromeNameLocationDescription_DataType
}

export interface AerodromesOfDestination {
  aerodromeOfDestination: Aerodrome;
  alternate1?: AlternateAerodrome;
  alternate2?: AlternateAerodrome;
}

export type AlternateAerodrome_DataType = string; // ANY{1, 100}

export interface SSRInfo {
  code: SSRCode;
  mode: SSRMode;
}
export interface AircraftIdentification {
  aircraftId?: AircraftICAOId;
  registrationMark: AircraftRegistrationMark;
  aircraftAddress?: ICAOAircraftAddress;
  ssrInfo?: SSRInfo;
}

export type AircraftType =
  | { icaoId: AircraftTypeICAOId }
  | { otherDesignation: OtherAircraftTypeDesignation_DataType };
export interface FlightPlan {
  ifplId?: IFPLId;
  airFiledData?: AirFiledData;
  aerodromeOfDeparture?: Aerodrome;
  aerodromesOfDestination: AerodromesOfDestination;
  enrouteAlternateAerodromes?: AlternateAerodrome_DataType;
  takeOffAlternateAerodromes?: AlternateAerodrome_DataType;
  aircraftId?: AircraftIdentification;
  whatIfRerouteReference?: number;
  numberOfAicraft?: number;
  aircraftType: AircraftType;
  totalEstimatedElapsedTime?: DurationHourMinute;
  eetsToLocations?: EstimatedElapsedTimeAtLocation[];
  wakeTubulenceCategory?: WakeTurbulenceCategory;
  flightType?: FlightType;
  flightRules?: FlightRules;
  estimatedOffBlockTime: DateTimeMinute;
  icaoRoute: string;
  stayInformation?: Array<string>; // Array<StayInformation_DataType>;
  enrouteDelays?: Array<EnrouteDelay>;
  equipmentCapabilityAndStatus?: EquipmentCapabilityAndStatus;
  surveillanceEquipment?: SurveillanceEquipment;
  otherInformation?: OtherInformation;
  supplementaryInformation?: SupplementaryInformation;
}

export type SupplementaryInformation = {
  fuelEndurance?: DurationHourMinute;
  numberOfPersons?: number;
  frequencyAvailability?: Array<FrequencyOnAircraft>;
  survivalEquipment?: Array<SurvivalEquipment>;
  otherSurvivalEquipment?: string;
  lifeJacketEquipment?: Array<LifeJacketEquipment>;
  dinghiesInformation?: Dinghies;
  aircraftCoulorAndMarkings?: string;
  pilotInCommand?: string;
};

export type FrequencyOnAircraft = 'ELT' | 'UHF' | 'VHF';

export type SurvivalEquipment = 'DESERT' | 'JUNGLE' | 'MARITIME' | 'POLAR';

export type LifeJacketEquipment = 'FLUORESCEIN' | 'LIGHTS' | 'UHF' | 'VHF';

export type Dinghies = {
  numberOfDinghies?: number; // NumberOfDinghies_DataType
  totalCapacity?: number; // TotalCapacity_DataType
  areCovered?: boolean;
  colour?: string; // Colour_DataType
};

export type OtherInformation = {
  selCalCode: string;
  nameOfOperator?: AircraftOperatorName_DataType;
  reasonForSpecialHandling?: SpecialHandlingIndicators;
  aircraftPerformanceData?: AircraftPerformanceCategory;
  communicationEquipment?: string;
  datalinkCapabilities?: DatalinkCapabilities;
  navigationEquipment?: string;
  performanceBasedNavigationCodes?: Array<PerformanceBasedNavigationCode>;
  otherSurveillanceEquipments?: string;
  replacementFlightPlanIndicator?: number;
  runwayVisualRange?: DistanceM;
  reclearanceInFlight?: ReclearanceInFlight;
  otherRemarks?: Array<string>;
};

export type ReclearanceInFlight = {
  icaoRoute: string;
  aerodrome: AerodromeICAOId;
};

export type PerformanceBasedNavigationCode =
  | 'BASIC_RNP_1_ALL'
  | 'BASIC_RNP_1_DME_DME'
  | 'BASIC_RNP_1_DME_DME_IRU'
  | 'BASIC_RNP_1_GNSS'
  | 'RNAV_10'
  | 'RNAV_1_ALL'
  | 'RNAV_1_DME_DME'
  | 'RNAV_1_DME_DME_IRU'
  | 'RNAV_1_GNSS'
  | 'RNAV_2_ALL'
  | 'RNAV_2_DME_DME'
  | 'RNAV_2_DME_DME_IRU'
  | 'RNAV_2_GNSS'
  | 'RNAV_5_ALL'
  | 'RNAV_5_DME_DME'
  | 'RNAV_5_GNSS'
  | 'RNAV_5_INS_OR_IRS'
  | 'RNAV_5_LORAN_C'
  | 'RNAV_5_VOR_DME'
  | 'RNP_4'
  | 'RNP_APCH'
  | 'RNP_APCH_BARO_VNAV'
  | 'RNP_AR_APCH_NO_RF'
  | 'RNP_AR_APCH_RF';

export type DatalinkCapabilities = {
  value?: string; // DataLinkCapabilities_DataType
};

export type AircraftPerformanceCategory =
  | 'CAT_A'
  | 'CAT_B'
  | 'CAT_C'
  | 'CAT_D'
  | 'CAT_E'
  | 'CAT_H';

export type SpecialHandlingIndicators = {
  icaoSTSIndicators?: Array<ICAOSTSIndicator>;
  eurSTSIndicators?: Array<EURSTSIndicator>;
};

export type ICAOSTSIndicator =
  | 'ALTRV'
  | 'ATFMX'
  | 'FFR'
  | 'FLTCK'
  | 'HAZMAT'
  | 'HEAD'
  | 'HOSP'
  | 'HUM'
  | 'MARSA'
  | 'MEDEVAC'
  | 'NONRVSM'
  | 'SAR'
  | 'STATE';

export type EURSTSIndicator =
  | 'CPDLCX'
  | 'EXM833'
  | 'PROTECTED'
  | 'RNAVINOP'
  | 'RNAVX';

export type AircraftOperatorName_DataType = string;

export type SurveillanceEquipment = {
  modeA?: EquipmentStatus;
  modeAAndC?: EquipmentStatus;
  modeS?: EquipmentStatus;
  modeSCapabilities?: ModeSCapabilities;
  adsb1900Out?: EquipmentStatus;
  adsb1900OutInt?: EquipmentStatus;
  adsbOutUAT?: EquipmentStatus;
  adsbOutInUAT?: EquipmentStatus;
  adsbOutVDL4?: EquipmentStatus;
  adsbOutInVDL4?: EquipmentStatus;
  adscFans?: EquipmentStatus;
  adscAtn?: EquipmentStatus;
};

export type ModeSCapabilities = {
  aircraftIdentification?: EquipmentStatus;
  pressureAltitude?: EquipmentStatus;
  extendedSquitterADSB?: EquipmentStatus;
  enhancedSurveillance?: EquipmentStatus;
};

export type FlightType =
  | 'GENERAL'
  | 'MILITARY'
  | 'NOT_SCHEDULED'
  | 'OTHER'
  | 'SCHEDULED';

export type EnrouteDelay = {
  delay?: DurationHourMinute;
  point?: ICAOPoint;
};

export type FlightRules = 'IFR' | 'IFR_THEN_VFR' | 'VFR' | 'VFR_THEN_IFR';

export type EstimatedElapsedTimeAtLocation = {
  elapsedTime: DurationHourMinute;
  fir?: FIRICAOId;
  point?: ICAOPoint;
  latitude?: Latitude;
  longitude?: Longitude;
};

export interface CDM {
  status:
    | 'ACTUAL_OFFBLOCK'
    | 'DEPARTING_FROM_CDM_AIRPORT'
    | 'DEPARTING_FROM_STANDARD_AIRPORT'
    | 'ESTIMATED'
    | 'PREDICTED'
    | 'PRE_SEQUENCED'
    | 'TARGETED';
  AirportType: 'ADVANCED_ATC_TWR' | 'CDM' | 'STANDARD';
  info?: CDMInfo;
}

export interface CDMInfo {
  turnaroundTargetTakeOffTime?: DateTimeMinute;
  earliestTargetTakeOffTime?: DateTimeMinute;
  consolidatedTargetTakeOffTime?: DateTimeMinute;
  atcTargetTakeOffTime?: DateTimeMinute;
  taxiTime?: DurationHourMinuteSecond;
  offBlockTimeDiscrepancy: boolean;
  flightStatusOutbound?: ATVFlightStatusOutbound;
  departureProc?: TerminalProcedure;
  departureRunway?: RunwayId; // TODO
  departureTerminal?: TerminalOrApronStandName;
  departureApronStand?: TerminalOrApronStandName; // TODO
  aircraftTypeDiscrepancy: boolean;
  aircraftType?: AircraftType; // TODO
  aircraftTypeIATA?: AircraftTypeIATAId; // TODO
  registrationMark?: AircraftRegistrationMark; // TODO
  registrationMarkDiscrepancy?: boolean;
  departureStatus: DepartureStatus;
  targetOffBlockTime?: DateTimeMinute;
  targetStartupApprovalTime?: DateTimeMinute;
  aircraftIdInbound?: AircraftICAOId;
  ifplIdInbound?: IFPLId;
  registrationMarkInbound?: AircraftRegistrationMark;
  cancelReason?: ReasonForDPICancellation;
}

// (UALPHA|DIGIT){1,6}
export type TerminalOrApronStandName = string;

// (UALPHA|DIGIT){3}
export type AircraftTypeIATAId = string;

export type ReasonForDPICancellation =
  | 'FLIGHT_CANCEL_IN_AODB'
  | 'FLIGHT_PLAN_INVALID'
  | 'NO_AIRPORT_SLOT'
  | 'RETURN_TO_STAND'
  | 'TOBT_UNKNOWN_OR_EXPIRED'
  | 'TSAT_EXPIRED'
  | 'UNDEFINED'
  | 'UNDO_ADPI';

export type ATVFlightStatusOutbound =
  | 'BRC'
  | 'BRD'
  | 'CNX'
  | 'DEI'
  | 'DEP'
  | 'INI'
  | 'OBK'
  | 'RDI'
  | 'RDY'
  | 'RET'
  | 'RPO'
  | 'RTN'
  | 'SCH'
  | 'TXD';

export type ATVFlightStatusInbound =
  | 'AIR'
  | 'CNX'
  | 'DBC'
  | 'BDR'
  | 'DIV'
  | 'FIR'
  | 'FNL'
  | 'GOA'
  | 'IBK'
  | 'IDH'
  | 'INI'
  | 'SCH'
  | 'TMA'
  | 'TXI';

export type DepartureStatus = 'OK' | 'DEICING';

export interface ExclusionFromRegulations {
  onTrafficVolume?: boolean;
  count?: number;
  all?: boolean;
  hasBeenExclused: boolean;
}

export interface ReroutingReference {
  name?: string; // ANY{1,14}
  validTo?: DateTimeMinute;
}

export interface DepartureTolerance {
  toleranceWindow: TimeHourMinutePeriod;
  extended: boolean;
}

export interface FlightPoint {
  timeOver: DateTimeSecond;
  flightLevel: FlightLevel;
  entryTrend: FlightTrend;
  exitTrend: FlightTrend;
  associatedRouteOrTerminalProcedure?: RouteOrTerminalProcedure;
  coveredDistance: DistanceNM;
  isVisible: boolean;
  aerodrome?: AerodromeICAOId;
  point?: ICAOPoint;
  flightPlanPoint?: boolean;
}

export interface FlightAirspace {
  airspaceId: AirspaceId;
  airspaceType: AirspaceType;
  firstEntryTime: DateTimeSecond;
  firstEntryFlightLevel: FlightLevel;
  lastExitFlightLevel: FlightLevel;
  firstEntryTrend: FlightTrend;
  middleTrend: FlightTrend;
  firstEntryDistance: DistanceNM;
  lastExitTime: DateTimeSecond;
  lastExitTrend: FlightTrend;
  lastExitDistance: DistanceNM;
  occupancyDuration: DurationHourMinuteSecond;
  occupancyDistance: DistanceNM;
  activated: boolean;
}

export interface RequestedFlightLevel {
  flightLevel: FlightLevel;
  segmentSequenceNumber: number;
  relativeDistance: number;
}

export interface FlightEvent {
  timestamp: DateTimeSecond;
  type: FlightEventType;
  resultingState: FlightState;
  resultingOffBlockTime: DateTimeMinute;
  efdSent: boolean;
  fumSent: boolean;
}

export type FlightEventType = string; // TODO: disjoint union, too many to list !

export interface FlightOperationalLogEntry {
  timestamp?: DateTimeSecond;
  type?: FlightOperationalLogEntryType;
  etfmsId?: number;
  ifplId?: IFPLId;
  issuer?: string;
  message?: string;
  summaryFields?: string[];
}

export type FlightOperationalLogEntryType =
  | 'ENVIRONMENT_MESSSAGE'
  | 'ERRONEOUS_INCOMING_MESSAGE'
  | 'ERROR_MESSAGE'
  | 'HISTORY'
  | 'INCOMING_MESSAGE'
  | 'OUTGOING_MESSAGE'
  | 'PROCESS_ERROR'
  | 'TEXT_MESSAGE'
  | 'UNDEFINED'
  | 'USER_COMMAND'
  | 'VIOLATION'
  | 'WARNING';

export interface EquipmentCapabilityAndStatus {
  gbas?: EquipmentStatus;
  lvp?: EquipmentStatus;
  loranC?: EquipmentStatus;
  dme?: EquipmentStatus;
  fmcWprAcars?: EquipmentStatus;
  dFisAcars?: EquipmentStatus;
  pdcAcars?: EquipmentStatus;
  adf?: EquipmentStatus;
  gnss?: EquipmentStatus;
  hfRtf?: EquipmentStatus;
  inertialNavigation?: EquipmentStatus;
  cpdlcAtnVdlMode2?: EquipmentStatus;
  cpdlcFans1AHFDL?: EquipmentStatus;
  cpdlcFans1AVdlModeA?: EquipmentStatus;
  cpdlcFans1AVdlMode2?: EquipmentStatus;
  cpdlcFans1ASatcomInmarsat?: EquipmentStatus;
  cpdlcFans1ASatcomMtsat?: EquipmentStatus;
  cpdlcFans1ASatcomIridium?: EquipmentStatus;
  mls?: EquipmentStatus;
  ils?: EquipmentStatus;
  atcRtfSatcomInmarsat?: EquipmentStatus;
  atcRtfSatcomMtsat?: EquipmentStatus;
  atcRtfSatcomIridium?: EquipmentStatus;
  vor?: EquipmentStatus;
  rcp1?: EquipmentStatus;
  rcp2?: EquipmentStatus;
  rcp3?: EquipmentStatus;
  rcp4?: EquipmentStatus;
  rcp5?: EquipmentStatus;
  rcp6?: EquipmentStatus;
  rcp7?: EquipmentStatus;
  rcp8?: EquipmentStatus;
  rcp9?: EquipmentStatus;
  pbnApproved?: EquipmentStatus;
  standard?: EquipmentStatus;
  tacan?: EquipmentStatus;
  uhfRtf?: EquipmentStatus;
  vhfRtf?: EquipmentStatus;
  rvsm?: EquipmentStatus;
  mnps?: EquipmentStatus;
  khz833?: EquipmentStatus;
  other?: EquipmentStatus;
}

export type EquipmentStatus = 'EQUIPPED' | 'NOT_EQUIPPED';

export interface FlightRestriction {
  timeOver: DateTimeSecond;
  coveredDistance: DistanceNM;
  flightPlanProcessing: FlightPlanProcessing;
  restrictionId: RestrictionId;
  event: EntryExit;
  position: CommonPosition;
  flightLevel: FlightLevel;
}

export type EntryExit = 'ENTRY' | 'EXIT';
export type CfmuFlightType =
  | 'ACT'
  | 'IFPL'
  | 'MFD'
  | 'PREDICTED_FLIGHT'
  | 'RPL'
  | 'TACT_ACTIVATED'
  | 'TERMINATED';

export type LoadStateAtReferenceLocation =
  | { ENTRY: LoadState }
  | { OCCUPANCY: OtmvStatus };

export interface DeltaEntry {
  intruderKind: IntruderKind;
  originOfIntruder?: AirspaceId;
  deltaMinutes: number;
  deltaFlightLevel: number;
  deltaPosition: DistanceNM;
}

export type IntruderKind =
  | 'HORIZONTAL_INTRUDER'
  | 'unknown_INTRUDER'
  | 'NON_INTRUDER'
  | 'VERTICAL_INTRUDER';

export type CTOTLimitReason =
  | 'FORCED_BY_CHAMAN'
  | 'FORCED_BY_NMOC'
  | 'FORCED_BY_STAM_MEASURE'
  | 'FORCED_BY_TOWER'
  | 'LIMITED_BY_VIOLATION'
  | 'LIMITED_BY_VIOLATION_THEN_ZERO_RATE_OR_RVR'
  | 'SLOT_EXTENSION'
  | 'SLOT_TIME_NOT_LIMITED'
  | 'WAS_FORCED_BY_NMOC';

export interface ProfileValidity {
  profileValidityKind: ProfileValidityKind;
  lastValidEOBT: DateTimeMinute;
}
export type ProfileValidityKind = 'NO_VIOLATIONS' | 'UNKNOWN' | 'VIOLATIONS';

export interface TargetTime {
  regulationId: RegulationId;
  targetTime: DateTimeSecond;
  targetLevel: FlightLevel;
  aerodromeICAOId?: AerodromeICAOId;
  point?: ICAOPoint;
  flightPlanPoint?: boolean;
  coveredDistance: DistanceNM;
  actualTimeAtTarget?: ActualTimeAtTarget;
}

export interface FourDPosition {
  timeOver: DateTimeSecond;
  position: Position;
  level: FlightLevel;
}

export interface Position {
  latitude?: Latitude;
  longitude?: Longitude;
}

export type Latitude = number;
export type Longitude = number;

export interface ActualTimeAtTarget {
  estimatedActualTimeAtTarget: DateTimeSecond;
  targetTimeCompliance: IntervalPosition;
}
export type IntervalPosition = 'AFTER' | 'BEFORE' | 'INSIDE';

export interface FlightListRequest {
  dataset: Dataset;
  includeProposalFlights: boolean;
  includeForecastFlights: boolean;
  trafficType: TrafficType;
  trafficWindow?: DateTimeMinutePeriod;
  worstLoadStateAtReferenceLocationType?: CountsCalculationType;
  compareWithOtherTrafficType?: TrafficType;
  requestedFlightFields?: FlightField[];
}

export interface FlightListByLocationRequest extends FlightListRequest {
  countsInterval?: CountsInterval;
  aircraftOperators?: AircraftOperatorICAOId[];
  includeInvisibleFlights?: boolean;
}

export interface FlightListByAirspaceRequest extends FlightListRequest {
  calculationType?: CountsCalculationType;
  airspace: AirspaceId;
}

export type FlightOrFlightPlan =
  | { flight: Flight }
  | { flightPlan: FlightPlanOrInvalidFiling };

export type FlightPlanOrInvalidFiling =
  | { lastValidFlightPlan: FlightPlanSummary }
  | { currentInvalid: InvalidFiling };

export interface FlightPlanSummary {
  id: FlightIdentificationOutput;
  status: FlightPlanStatus;
}
export type FlightPlanStatus =
  | 'AIRBORNE'
  | 'BACKUP'
  | 'CLOSED'
  | 'FILED'
  | 'OFFBLOCKS'
  | 'SUSPENDED'
  | 'TACT_DELETED'
  | 'TERMINATED';

export type FlightPlanMessageType =
  | 'ACH'
  | 'AFP'
  | 'APL'
  | 'ARR'
  | 'CHG'
  | 'CNL'
  | 'DEP'
  | 'DLA'
  | 'FNM'
  | 'FPL'
  | 'MFS'
  | 'RQP'
  | 'RQS';

export type FlightPlanMessageStatus =
  | 'DELETED'
  | 'DISCARD'
  | 'INVALID'
  | 'MULTIPLE'
  | 'REFERRED'
  | 'REJECTED';

export interface InvalidFiling {
  filingTime: DateTimeSecond;
  invalidMessageType: FlightPlanMessageType;
  invalidMessageStatus: FlightPlanMessageStatus;
  keys?: FlightKeys;
}

export interface FlightListReplyData {
  flights: FlightOrFlightPlan[];
}

export interface FlightListByLocationReplyData {
  effectiveTrafficWindow: DateTimeMinutePeriod;
}

export interface FlightListByAirspaceReply extends Reply {
  data: FlightListByLocationReplyData & FlightListReplyData;
}

export interface FlightPlanListRequest {
  aircraftId?: string;
  aerodromeOfDeparture?: string;
  nonICAOAerodromeOfDeparture: boolean;
  airFiled: boolean;
  aerodromeOfDestination?: string;
  nonICAOAerodromeOfDestination: boolean;
  estimatedOffBlockTime: DateTimeMinutePeriod;
}

export interface FlightPlanListReply extends Reply {
  data: {
    summaries?: FlightPlanOrInvalidFiling[];
  };
}

export interface FlightRetrievalRequest {
  dataset: Dataset;
  includeProposalFlights: boolean;
  flightId: FlightIdentificationInput;
  requestedFlightDatasets: FlightDataset[];
  requestedFlightFields?: FlightField[];
  requestedDataFormat: FlightExchangeModel;
}

export interface FlightRetrievalReply extends Reply {
  data: {
    latestFlightPlan?: FlightPlanOutput;
    flightPlanHistory?: FlightPlanHistory;
    flight?: Flight;
  };
}

export interface FlightListByTrafficVolumeRequest
  extends FlightListByLocationRequest {
  calculationType?: CountsCalculationType;
  trafficVolume: TrafficVolumeId;
  flow?: FlowId;
}

export interface FlightListByTrafficVolumeReply extends Reply {
  data: FlightListReplyData;
}

export interface FlightListByMeasureRequest
  extends FlightListByLocationRequest {
  measure: MeasureId;
  mode: FlightListByMeasureMode;
}

export type FlightListByMeasureMode =
  | 'ACTIVATED_BY_MEASURE'
  | 'CONCERNED_BY_MEASURE';

export interface FlightListByMeasureReply extends Reply {
  data: FlightListByLocationReplyData;
}
