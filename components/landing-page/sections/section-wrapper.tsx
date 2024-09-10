"use server";
import React from "react";

// Import utils
import { cn } from "@/lib/utils";

// Import actions

type SectionProps = {
    children: React.ReactNode;
    className?: string;
    outerClassName?: string;
};

export const Section = async ({
    children,
    className,
    outerClassName,
}: SectionProps) => {
    return (
        <div className={cn("flex flex-row", outerClassName ?? "")}>
            <div className="flex w-full flex-row overflow-hidden">
                <div
                    className={cn(
                        "mx-auto w-full max-w-screen-xl lg:px-8",
                        className ?? "",
                    )}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
