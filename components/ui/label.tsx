"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva(
    "text-sm font-medium leading-none cursor-inherit peer-disabled:cursor-not-allowed peer-disabled:opacity-70 transition-all duration-200 ease-in-out",
    {
        variants: {
            variant: {
                default: "text-base font-normal",
                title: "text-3xl font-medium ",
                title2: "text-2xl font-medium ",
                title3: "text-xl font-medium ",
                title4: "text-md font-medium ",
                title5: "text-sm font-medium ",
                subtitle: "text-lg font-medium",
                body: "text-base font-normal",
                description: "text-sm font-normal ",
                label: "text-sm font-medium",
                helper: "text-sm font-normal",
            },
            color: {
                default: "text-primary",
                muted: "text-muted-foreground",
                destructive: "text-destructive",
                alert: "text-red-500",
                warning: "text-orange-500",
                secondary: "text-secondary",
                white: "text-white",
            },
            font: {
                serif: "font-serif",
                mono: "font-mono",
                sans: "font-sans",
            },
            align: {
                left: "text-left",
                center: "text-center",
                right: "text-right",
            },
            cursor: {
                pointer: "cursor-pointer",
                default: "cursor-default",
            },
        },
        defaultVariants: {
            variant: "default",
            color: "default",
            font: "sans",
            align: "left",
            cursor: "default",
        },
    },
);

const Label = React.forwardRef<
    React.ElementRef<typeof LabelPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
        VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
    <LabelPrimitive.Root
        ref={ref}
        className={cn(
            labelVariants({
                variant: props.variant,
                color: props.color,
                font: props.font,
                align: props.align,
                cursor: props.cursor,
            }),
            className,
        )}
        {...props}
    />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
