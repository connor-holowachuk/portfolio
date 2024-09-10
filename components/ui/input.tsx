// "use client";
// import * as React from "react";
// import { Eye, EyeOff, Check } from "lucide-react";
// import { cn } from "@/lib/utils";

// export interface InputProps
//     extends React.InputHTMLAttributes<HTMLInputElement> {
//     label?: string;
//     valid?: boolean;
//     onEnterPress?: () => void;
// }

// const Input = React.forwardRef<HTMLInputElement, InputProps>(
//     ({ className, type, label, valid, onEnterPress, ...props }, ref) => {
//         const [showPassword, setShowPassword] = React.useState(false);
//         const isPasswordType = type === "password";

//         const togglePasswordVisibility = () => {
//             setShowPassword(!showPassword);
//         };

//         const handleKeyDown = (
//             event: React.KeyboardEvent<HTMLInputElement>,
//         ) => {
//             if (event.key === "Enter" && onEnterPress) {
//                 onEnterPress();
//             }
//         };

//         return (
//             <div className="relative">
//                 {label && (
//                     <label className="mb-2 block text-sm font-medium text-gray-700">
//                         {label}
//                     </label>
//                 )}
//                 <div className="relative">
//                     <input
//                         type={isPasswordType && showPassword ? "text" : type}
//                         className={cn(
//                             "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-primary ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
//                             "shadow-sm focus:border-secondary focus:shadow-md",
//                             "caret-primary",
//                             (isPasswordType || valid) && "pr-10",
//                             className,
//                         )}
//                         ref={ref}
//                         onKeyDown={handleKeyDown}
//                         {...props}
//                     />
//                     {isPasswordType && (
//                         <button
//                             type="button"
//                             onClick={togglePasswordVisibility}
//                             className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-sm border border-input text-gray-500 shadow-sm hover:text-gray-700 focus:outline-none"
//                         >
//                             {showPassword ? (
//                                 <EyeOff className="h-4 w-4" />
//                             ) : (
//                                 <Eye className="h-4 w-4" />
//                             )}
//                         </button>
//                     )}
//                     {valid && (
//                         <div className="absolute right-2 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-sm bg-secondary text-white">
//                             <Check className="h-3 w-3" />
//                         </div>
//                     )}
//                 </div>
//             </div>
//         );
//     },
// );

// Input.displayName = "Input";

// export { Input };

"use client";
import * as React from "react";
import { Eye, EyeOff, Check } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
    "flex shadow-sm caret-primary focus:border-secondary focus:shadow-md h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-primary ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "border border-input bg-background",
                ghost: "border-none bg-transparent shadow-none focus:shadow-none",
                outline: "border border-input bg-transparent",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputVariants> {
    label?: string;
    valid?: boolean;
    onEnterPress?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,
            type,
            label,
            valid,
            onEnterPress,
            variant,
            size,
            ...props
        },
        ref,
    ) => {
        const [showPassword, setShowPassword] = React.useState(false);
        const isPasswordType = type === "password";

        const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
        };

        const handleKeyDown = (
            event: React.KeyboardEvent<HTMLInputElement>,
        ) => {
            if (event.key === "Enter" && onEnterPress) {
                onEnterPress();
            }
        };

        return (
            <div className="relative">
                {label && (
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        {label}
                    </label>
                )}
                <div className="relative">
                    <input
                        type={isPasswordType && showPassword ? "text" : type}
                        className={cn(
                            inputVariants({ variant }),
                            "caret-primary",
                            (isPasswordType || valid) && "pr-10",
                            className,
                        )}
                        ref={ref}
                        onKeyDown={handleKeyDown}
                        {...props}
                    />
                    {isPasswordType && (
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-sm border border-input text-gray-500 shadow-sm hover:text-gray-700 focus:outline-none"
                        >
                            {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                            ) : (
                                <Eye className="h-4 w-4" />
                            )}
                        </button>
                    )}
                    {valid && (
                        <div className="absolute right-2 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-sm bg-secondary text-white">
                            <Check className="h-3 w-3" />
                        </div>
                    )}
                </div>
            </div>
        );
    },
);

Input.displayName = "Input";

export { Input, inputVariants };
