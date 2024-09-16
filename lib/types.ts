import React from "react";

export enum ProjectTag {
    HARDWARE = "HARDWARE",
    SOFTWARE = "SOFTWARE",
    FIRMWARE = "FIRMWARE",
    FRONTEND = "FRONTEND",
    BACKEND = "BACKEND",
    AI = "AI",
    EMBEDDED = "EMBEDDED",
    WEB = "WEB",
    MOBILE = "MOBILE",
    DESKTOP = "DESKTOP",
    PLASTIC_INJECTION = "PLASTIC_INJECTION",
    MECHANICAL = "MECHANICAL",
    PCBA = "PCBA",
    PROTOTYPING = "PROTOTYPING",
    SOLDERING = "SOLDERING",
    TESTING = "TESTING",
    STARTUP = "STARTUP",
}

export type Project = {
    title: string;
    id: string;
    companyId: string;
    description: string;
    color?: string;
    icon?: React.ReactNode;
    iconUrl?: string;
    thumbnailUrl?: string;
    thumbnailBlurUrl?: string;
    link?: string;
    tags: ProjectTag[];
    date?: string;
    page?: {
        element: React.ReactNode;
        summary: string;
        heroImageSrc: string;
        placeholderHeroImageSrc: string;
        headerLogoSrc: string;
        infoBlurb: string;
        siteUrl: string;
    };
};

export type WorkExperience = {
    company: string;
    id: string;
    role: string;
    date: string;
    location: string;
    description: string;
    scheme: "light" | "dark" | "color-blue" | "color-green";
    image: string;
    color?: string;
    page?: {
        element: React.ReactNode;
        heroImageSrc: string;
        placeholderHeroImageSrc: string;
        headerLogoSrc: string;
        infoBlurb: string;
        siteUrl: string;
    };
    hideCard?: boolean;
    // projectsIds?: string[];
};

export type Technology = {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    iconUrl?: string;
    link?: string;
    projectIds?: string[];
    workExperienceIds?: string[];
    startYear: number;
    yearsOfExperience?: number;
};

export type TechnologyGroup = {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    iconUrl?: string;
    link?: string;
    technologies: Technology[];
    splitColumns?: boolean;
};

export type TechnologyPage = {
    title: string;
    description: string;
    icon?: React.ReactNode;
    iconUrl?: string;
    link?: string;
    groups: TechnologyGroup[];
};
