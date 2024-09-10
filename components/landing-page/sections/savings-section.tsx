'use client';
import React, { useState } from 'react';
import Link from 'next/link';

// Import components
import { Label } from '@/components/ui/label';

// Import utils
import { cn, getStringFormattedInt } from '@/lib/utils';

// Define and import types
type SavingsSectionProps = {};

const SavingsSection = ({}: SavingsSectionProps) => {
	const summaryReviewTime = 0.0666667; // 4 minutes per summary review
	const [hoursPerWeek, setHoursPerWeek] = useState<number[]>([40]);

	const [rosterSize, setRosterSize] = useState<number[]>([500]);
	const [apptLength, setApptLength] = useState<number[]>([30]);
	const [hourlyRate, setHourlyRate] = useState<number[]>([150]);

	const [timeframe, setTimeframe] = useState<'monthly' | 'yearly'>(
		'yearly'
	);

	const getHoursSaved = () => {
		const apptLengthHours = apptLength[0] / 60;
		const compressionFactor = summaryReviewTime / apptLengthHours;

		const hoursPerMonth = hoursPerWeek[0] * 4;
		const hoursSavedPerMonth =
			hoursPerMonth * (1 - compressionFactor);

		return hoursSavedPerMonth;
	};

	const getHoursSavedString = () => {
		let hoursSavedPerMonth = getHoursSaved();
		hoursSavedPerMonth =
			timeframe === 'yearly'
				? hoursSavedPerMonth * 12
				: hoursSavedPerMonth;
		return getStringFormattedInt(Math.ceil(hoursSavedPerMonth));
	};

	const getOpportunityCost = () => {
		const apptLengthHours = apptLength[0] / 60;

		const hoursPerMonth = hoursPerWeek[0] * 4;
		const hoursSavedPerMonth = getHoursSaved();

		let opportunityCost =
			(hoursSavedPerMonth * hourlyRate[0]) / apptLengthHours;
		opportunityCost =
			timeframe === 'yearly'
				? opportunityCost * 12
				: opportunityCost;

		return opportunityCost;
	};

	const getOpportunityCostString = () => {
		return getStringFormattedInt(Math.ceil(getOpportunityCost()));
	};

	const getSavings = () => {
		let savings =
			(rosterSize[0] * apptLength[0] * hourlyRate[0]) / 60;

		savings = timeframe === 'yearly' ? savings * 12 : savings;

		return getStringFormattedInt(Math.ceil(savings));
	};

	const getRevenueIncrease = () => {
		let currentReveue =
			hourlyRate[0] *
			(60 / apptLength[0]) *
			(hoursPerWeek[0] * 4);
		currentReveue =
			timeframe === 'yearly'
				? currentReveue * 12
				: currentReveue;

		const newRevenue = currentReveue + getOpportunityCost();
		const revenueIncrease = newRevenue - currentReveue;
		const percentageIncrease =
			(revenueIncrease / currentReveue) * 100;
		return {
			revenueIncrease: getStringFormattedInt(
				Math.ceil(revenueIncrease)
			),
			percentageIncrease: percentageIncrease.toFixed(0),
		};
	};

	const getNewAppointmentVolume = () => {
		const newAppointments =
			getHoursSaved() / (apptLength[0] / 60);
		return getStringFormattedInt(Math.ceil(newAppointments));
	};

	return (
		<div className="flex flex-row">
			<div className="flex w-full flex-row overflow-hidden">
				<div className="mx-auto flex w-full max-w-screen-xl flex-col py-32 sm:py-32 md:flex-row lg:px-8 lg:py-32">
					<div className="flex w-full flex-col gap-4 gap-y-4 px-4 py-16 sm:px-6 md:w-1/2 md:pr-12 lg:pl-0">
						<div className="flex w-full flex-row">
							<Label className="w-full font-serif text-4xl font-normal leading-tight text-black">
								Save time per client while growing
								relationship.
							</Label>
						</div>
						<div className="flex w-full flex-row">
							<Label className="w-full font-sans text-xl font-normal leading-loose text-black/50">
								Nulla aute aliqua commodo ut ut ut ad
								consectetur. Minim ad nisi consequat
								pariatur laboris sit Lorem in.
							</Label>
						</div>
						<div className="flex w-full flex-col gap-2 gap-y-2">
							<div className="flex w-full flex-col gap-1 gap-y-1">
								<div className="flex w-full flex-row items-end justify-between">
									<Label className="text-md pb-2 font-sans font-normal text-black/50">
										Average Appointment Duration
									</Label>
									<Label className="hidden font-serif text-3xl font-normal text-black sm:block">
										{getStringFormattedInt(
											apptLength[0] ?? 0
										)}{' '}
										minutes
									</Label>
									<Label className="block font-serif text-3xl font-normal text-black sm:hidden">
										{getStringFormattedInt(
											apptLength[0] ?? 0
										)}{' '}
										m
									</Label>
								</div>
							</div>
							<div className="flex w-full flex-col gap-1 gap-y-1">
								<div className="flex w-full flex-row items-end justify-between">
									<Label className="text-md pb-2 font-sans font-normal text-black/50">
										Hours Worked Per Week
									</Label>
									<Label className="font-serif text-3xl font-normal text-black">
										{getStringFormattedInt(
											hoursPerWeek[0] ?? 0
										)}{' '}
										hours
									</Label>
								</div>
							</div>
							<div className="flex w-full flex-col gap-1 gap-y-1">
								<div className="flex w-full flex-row items-end justify-between">
									<Label className="text-md pb-2 font-sans font-normal text-black/50">
										My Hourly Rate
									</Label>
									<Label className="font-serif text-3xl font-normal text-black">
										$
										{getStringFormattedInt(
											hourlyRate[0] ?? 0
										)}
									</Label>
								</div>
							</div>
						</div>
					</div>
					<div className="relative flex w-full flex-grow flex-col items-center justify-center px-4 py-12 md:w-1/2 md:items-start md:px-0">
						<div className="relative z-10 w-full max-w-[500px] rounded-[26px] border border-black/5 bg-white/90 px-5 py-5 shadow-lg shadow-black/5 backdrop-blur-md">
							<div className="flex w-full flex-row items-center justify-between border-b border-black/10 pb-1">
								<Label className="font-serif text-2xl font-normal text-black">
									Total Savings
								</Label>
								<div className="flex flex-row gap-0.5 gap-x-0.5">
									<div
										onClick={() =>
											setTimeframe('yearly')
										}
										className={cn(
											'group cursor-pointer rounded-md border border-transparent px-2 py-1 transition-all duration-200 ease-in-out hover:border-black/10 hover:bg-white hover:shadow-sm hover:shadow-black/10',
											timeframe === 'yearly'
												? 'border-black/10 bg-white shadow-sm shadow-black/5'
												: 'border-transparent'
										)}>
										<Label
											className={cn(
												'text-md cursor-pointer font-sans font-normal transition-all duration-200 ease-in-out',
												timeframe === 'yearly'
													? 'text-black'
													: 'text-black/50'
											)}>
											Yearly
										</Label>
									</div>
									<div
										onClick={() =>
											setTimeframe('monthly')
										}
										className={cn(
											'group cursor-pointer rounded-md border border-transparent px-2 py-1 transition-all duration-200 ease-in-out hover:border-black/10 hover:bg-white hover:shadow-sm hover:shadow-black/10',
											timeframe === 'monthly'
												? 'border-black/10 bg-white shadow-sm shadow-black/5'
												: 'border-transparent'
										)}>
										<Label
											className={cn(
												'text-md cursor-pointer font-sans font-normal transition-all duration-200 ease-in-out',
												timeframe ===
													'monthly'
													? 'text-black'
													: 'text-black/50'
											)}>
											Monthly
										</Label>
									</div>
								</div>
							</div>
							<div className="w-full py-6">
								<div className="w-full">
									<Label className="text-md font-sans font-normal text-black/50">
										Etimated Opportunity Cost
									</Label>
								</div>
								<div className="w-full">
									<Label className="font-serif text-3xl font-normal leading-[42px] text-black">
										$ {getOpportunityCostString()}
										{timeframe === 'yearly'
											? '/yr'
											: '/mo'}
									</Label>
								</div>
							</div>
							<div className="mb-4 flex w-full flex-col">
								<div className="flex w-full flex-row items-center justify-between border-t border-black/5 py-5">
									<div className="">
										<Label className="text-md font-sans font-normal text-black/50">
											Hours Saved
										</Label>
									</div>
									<div className="">
										<Label className="font-sans text-xl font-normal text-black">
											{getHoursSavedString()}{' '}
											hours
										</Label>
									</div>
								</div>
								<div className="flex w-full flex-row items-center justify-between border-t border-black/5 py-5">
									<div className="">
										<Label className="text-md font-sans font-normal text-black/50">
											Revenue Increase
										</Label>
									</div>
									<div className="">
										<Label className="font-sans text-xl font-normal text-black">
											+{' '}
											{
												getRevenueIncrease()
													.percentageIncrease
											}
											%
										</Label>
									</div>
								</div>
								<div className="flex w-full flex-row items-center justify-between border-t border-black/5 py-5">
									<div className="">
										<Label className="text-md font-sans font-normal text-black/50">
											New Appointments Openings
										</Label>
									</div>
									<div className="">
										<Label className="font-sans text-xl font-normal text-black">
											{getNewAppointmentVolume()}
										</Label>
									</div>
								</div>
							</div>
							<Link
								href="/get-started"
								className="flex h-14 w-full cursor-pointer items-center justify-center rounded-lg bg-black shadow-md shadow-black/10 transition-all duration-200 ease-in-out hover:opacity-70">
								<Label className="text-md cursor-pointer font-sans font-normal text-white">
									Create my clone
								</Label>
							</Link>
						</div>
						<div className="absolute left-12 z-0 flex h-full min-h-[400px] w-[150%] items-center justify-center rounded-[40px] bg-gradient-to-b from-secondary to-[#B0A0FC]"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SavingsSection;
