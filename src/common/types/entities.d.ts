interface IRocketCore {
  'core_serial': string;
  'flight': number;
  'block': number;
  'gridfins': Boolean;
  'legs': Boolean;
  'reused': Boolean;
  'land_success': Boolean | null;
  'landing_intent': Boolean;
  'landing_type': string | null;
  'landing_vehicle': string | null;
}

interface IRocketFirstStage {
  'cores': Array<IRocketCore>;
}

interface IOrbitParams {
  'reference_system': string;
  'regime': string;
  'longitude': number | null;
  'semi_major_axis_km': number;
  'eccentricity': number;
  'periapsis_km': number;
  'apoapsis_km': number;
  'inclination_deg': number;
  'period_min': number;
  'lifespan_years': number | null;
  'epoch': string;
  'mean_motion': number;
  'raan': number;
  'arg_of_pericenter': number;
  'mean_anomaly': number;
}

interface IRocketPayloads {
  'payload_id': string;
  'norad_id': Array<number>;
  'cap_serial': string;
  'reused': Boolean;
  'customers': Array<string>;
  'nationality': string;
  'manufacturer': string;
  'payload_type': string;
  'payload_mass_kg': number;
  'payload_mass_lbs': number;
  'orbit': string;
  'orbit_params': IOrbitParams;
  'mass_returned_kg': number;
  'mass_returned_lbs': number;
  'flight_time_sec': number;
  'cargo_manifest': string;
}

interface IRocketSecondStage {
  'block': number;
  'payloads': IRocketPayloads;
}

interface IFairings {
  'reused': Boolean;
  'recovery_attempt': Boolean;
  'recovered': Boolean;
  'ship': string | null;
}

interface IRocket {
  'rocket_id': string;
  'rocket_name': string;
  'rocket_type': string;
  'first_stage': IRocketFirstStage;
  'second_stage': IRocketSecondStage;
  'fairings': IFairings;
}

interface ITelemetry {
  'flight_club': string | null;
}

interface ILaunchSite {
  'site_id': string;
  'site_name': string;
  'site_name_long': string;
}

interface ILinks {
  'mission_patch': string,
  'mission_patch_small': string,
  'reddit_campaign': string,
  'reddit_launch': string,
  'reddit_recovery': string | null,
  'reddit_media': string | null,
  'presskit': string,
  'article_link': string,
  'wikipedia': string,
  'video_link': string,
  'flickr_images': Array<string>
}

interface ILaunchFailureDetails {
  'time': number,
  'altitude': number,
  'reason': string
}

export interface ILaunch {
  'flight_number': number;
  'mission_name': string;
  'mission_id': Array<string>;
  'upcoming': Boolean;
  'launch_year': string;
  'launch_date_unix': number;
  'launch_date_utc': string;
  'launch_date_local': string;
  'is_tentative': Boolean;
  'tentative_max_precision': string;
  'tbd': Boolean;
  'launch_window': number;
  'rocket': IRocket;
  'ships': Array<string>;
  'telemetry': ITelemetry;
  'launch_site': ILaunchSite;
  'launch_success': Boolean;
  'launch_failure_details': ILaunchFailureDetails;
  'links': ILinks;
  'details': string;
  'static_fire_date_utc': string;
  'static_fire_date_unix': number;
}

export interface ILaunches {
  launches: Array<ILaunch>;
}

export interface ITodo {
  text: string;
}

export interface ITodoList {
  uniqID: string,
  todos: Array<ITodo>
}

export interface ITodoLists {
  todoLists: Array<ITodoList>
}
