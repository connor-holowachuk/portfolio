import { SatelliteLogger } from './satellite-logger';
import { TemperatureLogger } from './temperature-logger';
// import { ExactMatch1 } from './exact-match-1';
import { ExactMatch2 } from './exact-match-2';
import { PCBAntennaTuning } from './pcb-antenna-tuning';
import { CraneAvoidance } from './crane-avoidance';
// import { RHMonitorBoring } from './rh-monitor-boring';
import { MultipointRHMonitor } from './multipoint-rh-monitor';

export const ProjectsExactTechnology = [
	MultipointRHMonitor,
	SatelliteLogger,
	ExactMatch2,
	TemperatureLogger,
	PCBAntennaTuning,
	CraneAvoidance,
];

export {
	MultipointRHMonitor,
	SatelliteLogger,
	TemperatureLogger,
	ExactMatch2,
	PCBAntennaTuning,
	CraneAvoidance,
};
