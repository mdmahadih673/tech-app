
"use client";

import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { toast } from "react-toastify";

export default function Basic() {
    const router = useRouter();

    const hendelGoogleSignIn = async () => {
        const resData = await signIn.social({
            provider: "google"
        });

        if (resData?.data) {
            router.push("/");
        }
    };

    const hendelGithubSignIn = async () => {
        const resData = await signIn.social({
            provider: "github"
        })

        if (resData?.data) {
            router.push('/')
        }

    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const { data: resData, error } = await signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/"
        });

        if (resData) {
            toast.success("সাইন আপ সফল হয়েছে");
            router.push("/");
        } else {
            toast.error(error?.message || "Sign in failed");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">
            <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

                {/* Header */}
                <div className="mb-8 text-center">
                    <div className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
                        Bangla<span className="text-red-600">News</span>
                    </div>

                    <h1 className="text-2xl font-bold text-gray-900">
                        Welcome Back
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Sign in to continue to your account
                    </p>
                </div>

                {/* Form */}
                <Form
                    className="flex w-full flex-col gap-5"
                    onSubmit={onSubmit}
                >
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        className="w-full"
                        validate={(value) => {
                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                            ) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
                    >
                        <Label className="mb-2 text-sm font-medium text-gray-700">
                            Email
                        </Label>

                        <Input
                            placeholder="john@example.com"
                            className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm shadow-none outline-none transition focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-100"
                        />

                        <FieldError className="mt-1 text-sm text-red-600" />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        className="w-full"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }

                            return null;
                        }}
                    >
                        <Label className="mb-2 text-sm font-medium text-gray-700">
                            Password
                        </Label>

                        <Input
                            placeholder="Enter your password"
                            className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm shadow-none outline-none transition focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-100"
                        />

                        <Description className="mt-1 text-xs text-gray-400">
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>

                        <FieldError className="mt-1 text-sm text-red-600" />
                    </TextField>

                    {/* Buttons */}
                    <div className="mt-2 flex w-full gap-3">
                        <Button
                            type="submit"
                            className="h-11 flex-1 rounded-lg bg-red-600 font-semibold text-white shadow-sm transition hover:bg-red-700"
                        >
                            <Check />
                            Submit
                        </Button>

                        <Button
                            type="reset"
                            variant="secondary"
                            className="h-11 rounded-lg border border-gray-300 bg-white px-6 font-medium text-gray-700 transition hover:bg-gray-50"
                        >
                            Reset
                        </Button>
                    </div>


                    <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-slate-500">
                        <span className="h-px flex-1 bg-white/10" />
                        or continue with
                        <span className="h-px flex-1 bg-white/10" />
                    </div>


                    <div className="flex w-full flex-col gap-3">
                        <Button
                            type="button"
                            onClick={hendelGoogleSignIn}
                            className="h-12 w-full justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:scale-[0.99]"
                            variant="tertiary"
                        >
                            <span
                                aria-hidden="true"
                                className="flex size-7 items-center justify-center rounded-full border border-gray-100 bg-white text-lg font-bold text-[#4285F4]"
                            >
                                G
                            </span>
                            Sign in with Google
                        </Button>
                        <Button
                            type="button"
                            onClick={hendelGithubSignIn}
                            className="h-12 w-full justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:scale-[0.99]"
                            variant="tertiary"
                        >
                            <span
                                aria-hidden="true"
                                className="flex size-7 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white"
                            >
                                GH
                            </span>
                            Sign in with GitHub
                        </Button>
                    </div>

                </Form>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-gray-500">
                    Don&apos;t have an account?{" "}
                    <Link
                        href="/sign-up"
                        className="font-semibold text-red-600 hover:text-red-700" >
                        Sign Up
                    </Link>
                </p>
                <p className="mt-6 text-center text-xs text-gray-400">
                    By continuing, you agree to our terms and privacy policy.
                </p>
            </div>
        </div>
    );
}
