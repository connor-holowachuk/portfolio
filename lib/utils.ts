import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getStringFormattedInt = (num: number) => {
	let flooredNum = Math.floor(num);
	let flooredNum_thousand = Math.floor(flooredNum % 1000);
	if (isNaN(flooredNum_thousand) || !isFinite(flooredNum_thousand)) {
		return "00";
	}
	return flooredNum < 10
		? `0${flooredNum}`
		: flooredNum > 1000
		? `${Math.floor(flooredNum / 1000)},${
			flooredNum_thousand < 1
				? "000"
				: flooredNum_thousand < 10
				? `00${flooredNum_thousand}`
				: flooredNum_thousand < 100
				? `0${flooredNum_thousand}`
				: flooredNum_thousand
		}`
		: `${flooredNum}`;
};

export const getFormattedTime = (time: number) => {
	let time_seconds = Math.floor(time % 60);
	let time_mins = Math.floor(time / 60);

	return `${time_mins < 10 ? "0" : ""}${time_mins}m ${
		time_seconds < 10 ? "0" : ""
	}${time_seconds}s`;
};
