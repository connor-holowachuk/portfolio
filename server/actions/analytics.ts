"use server";
import Mixpanel from "mixpanel";

export async function trackEvent(
	eventName: string,
	properties: Record<string, any>,
) {
	const mixpanel = Mixpanel.init(
		process.env.MIXPANEL_TOKEN as string,
	);

	const environmentMode = process.env.ENV_MODE;

	mixpanel.track(eventName, {
		...properties,
		environment_mode: environmentMode,
	});
}
