'use client';
import React, { useEffect } from 'react';

// Import actions
import { trackEvent } from '@/server/actions/analytics';

// Define and import types
type AnalyticsHelperProps = {
	pageName: string;
	pageData?: any;
};

const AnalyticsHelper = ({
	pageName,
	pageData,
}: AnalyticsHelperProps) => {
	useEffect(() => {
		const fetchAnalytics = async () => {
			try {
				const referrer = document.referrer || 'direct';

				const response = await fetch(
					'/api/analytics/user-agent',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							referrer: referrer,
							siteId: '',
						}),
					}
				);

				const data = await response.json();
				console.log(data);

				if (data) {
					const locData = data.location;
					trackEvent('Page Viewed', {
						pageName: pageName,
						...data,
						location: undefined,
						...locData,
						...pageData,
					});
				}
			} catch (err: any) {
				console.error(
					'Error occurred while fetching analytics:',
					err
				);
			}
		};

		if (process.env.LOG_ANALYTICS === 'true') {
			fetchAnalytics();
		}
	}, []);
	return <div className=""></div>;
};

export default AnalyticsHelper;
