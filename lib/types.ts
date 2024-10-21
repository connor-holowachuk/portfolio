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

export enum SoftwareTechnologyOption {
    NEXTJS = "next",
    REACT = "react",
    REACT_NATIVE = "react-native",
    SUPABASE = "supabase",
    TAILWIND = "tailwind",
    SHADCN = "shadcn",
    STRIPE = "stripe",
    PYTHON = "python",
    DJANGO = "django",
    EXPRESS = "express",
    NODE = "node",
    POSTGRESQL = "postgresql",
    MYSQL = "mysql",
    MONGODB = "mongodb",
    SQLITE = "sqlite",
    OPENAI = "openai",
    GROQ = "groq",
    CARTESIA = "cartesia",
    DENO = "deno",
    PINECONE = "pinecone",
    SAMBANOVA = "sambanova",
    LLAMA = "llama",
    IONIC = "ionic",
    CAPACITOR = "capacitor",
    EXPO = "expo",
    FIREBASE = "firebase",
    TWILIO = "twilio",
    SWIFT = "swift",
    GOOGLE_MAPS = "google-maps",
    COCOAPODS = "cocoapods",
    OBJECTIVE_C = "objective-c",
    RASPBERRY_PI = "raspberry-pi",
    VUE = "vue",
    BBME = "bbme",
    IRIDIUM = "iridium",
    ARDUINO = "arduino",
    ESP32 = "esp32",
    NORDIC_SDK = "nordic-sdk",
    SEGGER = "segger",
    FUSION = "fusion",
    ALTIUM = "altium",
    ZEPHYR = "zephyr",
    CPP = "cpp",
    PARTICLE = "particle",
    MAPBOX = "mapbox",
}

export type SoftwareTechnologyOptionType = {
    type: SoftwareTechnologyOption;
    title: string;
    iconUrl: string;
    link?: string;
};

export type PageSection =
    | ImageGallerySection
    | ImageLargeSection
    | InfoSection
    | ListSection
    | VideoLargeSection
    | YoutubeLargeSection
    | OtherProjectsSection
    | SoftwareTechnologiesSection
    | FeaturesSection
    | DividerSection;

export type ImageGalleryImage = {
    src: string;
    srcBlur?: string;
    alt: string;
    captionHeader?: string;
    caption?: string;
};

export type ImageGallerySection = {
    type: "image-gallery";
    title?: string;
    subtitle?: string;
    description?: string;
    images: ImageGalleryImage[];
};

export type ImageLargeSection = {
    type: "image-large";
    title?: string;
    subtitle?: string;
    description?: string;
    caption?: string;
    src: string;
    alt: string;
};

export type VideoLargeSection = {
    type: "video-large";
    title?: string;
    subtitle?: string;
    description?: string;
    src: string;
    alt: string;
};

export type YoutubeLargeSection = {
    type: "youtube-large";
    title?: string;
    subtitle?: string;
    description?: string;
    src: string;
    alt: string;
};

export type OtherProjectsSection = {
    type: "other-projects";
    title?: string;
    subtitle?: string;
    description?: string;
    projectIds: string[];
};

export type SoftwareTechnologiesSection = {
    type: "software-technologies";
    title?: string;
    subtitle?: string;
    description?: string;
    technologyOptions: SoftwareTechnologyOption[];
};

export type DividerSection = {
    type: "divider";
};

export type InfoSection = {
    type: "info";
    content: string;
};

export type ListSection = {
    type: "list";
    items: string[];
};

export type Feature = {
    title: string;
    description: string;
    icon?: React.ReactNode;
    iconUrl?: string;
};

export type FeaturesSection = {
    type: "features";
    title?: string;
    subtitle?: string;
    description?: string;
    features: Feature[];
};

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
        element?: React.ReactNode;
        summary: string;
        heroImageSrc: string;
        placeholderHeroImageSrc: string;
        headerLogoSrc: string;
        infoBlurb: string;
        siteUrl: string;
        sections: PageSection[];
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
    types?: ("hardware" | "software" | "design" | undefined)[];
    page?: {
        element: React.ReactNode;
        heroImageSrc: string;
        placeholderHeroImageSrc: string;
        headerLogoSrc: string;
        infoBlurb: string;
        siteUrl: string;
        projectsDescription?: string;
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
