import React from "react";

import { twMerge } from "tailwind-merge";

interface LineBeamProps {
    className?: string;
    horizontal?: boolean;
    variant?: "default" | "exercise";
    dashed?: boolean;
}

export const LineBeam = ({
    className,
    horizontal,
    variant,
    dashed,
}: LineBeamProps) => (
    <div
        className={twMerge(
            horizontal ? "line-horizontal" : "line",
            className,
            variant === "exercise" ? "line-exercise" : "",
        )}
        style={{
            background: dashed ? "transparent" : "#e3e2e4",
        }}
    >
        {dashed && (
            <div
                className={twMerge(
                    horizontal ? "line-dash-horizontal" : "line-dash",
                )}
            ></div>
        )}
    </div>
);
