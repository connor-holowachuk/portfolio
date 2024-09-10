import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const spinnerVariants = cva("animate-spin rounded-full border-t-transparent", {
    variants: {
        color: {
            default: "border-white",
            dark: "border-black",
            secondary: "border-secondary",
            destructive: "border-destructive",
            warning: "border-warning",
            success: "border-success",
            info: "border-info",
        },
        size: {
            default: "h-5 w-5 border-2",
            sm: "h-4 w-4 border-1.5",
            lg: "h-6 w-6 border-2",
            xl: "h-8 w-8 border-2.5",
        },
    },
    defaultVariants: {
        color: "default",
        size: "default",
    },
});
export interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
    asChild?: boolean;
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
    ({ color, size, asChild = false, ...props }, ref) => {
        return (
            <div className="flex items-center justify-center">
                <div
                    className={cn(
                        spinnerVariants({ color, size }),
                        "border-t-transparent",
                    )}
                />
            </div>
        );
    },
);

Spinner.displayName = "Spinner";

export { Spinner, spinnerVariants };
