"use client";

import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { Check } from "@gravity-ui/icons";
import { signUp } from "@/lib/auth-client";

export default function Basic() {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const { data: resData, error } = await signUp.email({
            name: data.name,
            email: data.email,
            password: data.password,
            image: data.image,
            callbackURL: '/'

        })
        console.log(resData, error);


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
                        Create an Account
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Join BanglaNews and stay updated
                    </p>
                </div>

                {/* Form */}
                <Form
                    className="flex w-full flex-col gap-5"
                    onSubmit={onSubmit}
                >

                    {/* Name */}
                    <TextField
                        isRequired
                        name="name"
                        className="w-full"
                    >
                        <Label className="mb-2 text-sm font-medium text-gray-700">
                            Full Name
                        </Label>

                        <Input
                            placeholder="John Doe"
                            className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm shadow-none outline-none transition focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-100"
                        />

                        <FieldError className="mt-1 text-sm text-red-600" />
                    </TextField>

                    {/* Email */}
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

                    {/* Image URL */}
                    <TextField
                        name="image"
                        type="url"
                        className="w-full"
                    >
                        <Label className="mb-2 text-sm font-medium text-gray-700">
                            Profile Image URL
                        </Label>

                        <Input
                            placeholder="https://example.com/profile.jpg"
                            className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm shadow-none outline-none transition focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-100"
                        />

                        <Description className="mt-1 text-xs text-gray-400">
                            Add a public URL for your profile image
                        </Description>

                        <FieldError className="mt-1 text-sm text-red-600" />
                    </TextField>

                    {/* Password */}
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
                            placeholder="••••••••"
                            className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm shadow-none outline-none transition focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-100"
                        />

                        <Description className="mt-1 text-xs text-gray-400">
                            At least 8 characters, 1 uppercase letter and 1 number
                        </Description>

                        <FieldError className="mt-1 text-sm text-red-600" />
                    </TextField>

                    {/* Confirm Password */}
                    <TextField
                        isRequired
                        name="confirmPassword"
                        type="password"
                        className="w-full"
                    >
                        <Label className="mb-2 text-sm font-medium text-gray-700">
                            Confirm Password
                        </Label>

                        <Input
                            placeholder="••••••••"
                            className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm shadow-none outline-none transition focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-100"
                        />

                        <FieldError className="mt-1 text-sm text-red-600" />
                    </TextField>

                    {/* Submit */}
                    <Button
                        type="submit"
                        className="mt-2 h-11 w-full rounded-lg bg-red-600 font-semibold text-white shadow-sm transition hover:bg-red-700"
                    >
                        <Check />
                        Create Account
                    </Button>
                </Form>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <a
                        href="/sign-in"
                        className="font-semibold text-red-600 transition hover:text-red-700"
                    >
                        Sign In
                    </a>
                </p>
            </div>
        </div>
    );
}

