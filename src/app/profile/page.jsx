
"use client";

import React from "react";
import { Card, Avatar, Button, Spinner } from "@heroui/react";
import Link from "next/link";

import { useSession } from "@/lib/auth-client";

const ProfilePage = () => {
    const { data: session, isPending } = useSession();


    if (isPending) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-950">
                <Spinner color="primary" />
            </div>
        );
    }

    const user = session?.user;

    if (!user) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-950 text-white">
                <p>You are not logged in.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-950 px-4 py-10 text-white">
            <div className="mx-auto max-w-4xl">

                <Card className="border border-gray-800 bg-gray-900 p-6">

                    {/* Profile Header */}
                    <div className="flex flex-col items-center gap-5 sm:flex-row">

                        <Avatar
                            alt={session.user.name || "Profile"}
                            src={session.user.image || ""}
                            className="h-24 w-24"
                        />

                        <div className="flex-1 text-center sm:text-left">

                            <h1 className="text-2xl font-bold">
                                {user.name}
                            </h1>

                            <p className="mt-1 text-gray-400">
                                Full Stack Web Developer
                            </p>

                            <p className="mt-1 text-sm text-gray-500">
                                {user.email}
                            </p>

                        </div>

                        <Link href="/profile/edit">
                            <Button
                                color="primary"
                                variant="shadow"
                            >
                                Edit Profile
                            </Button>
                        </Link>

                    </div>


                    {/* Divider */}
                    <div className="my-7 h-px bg-gray-800" />

                    {/* Personal Information */}
                    <div>
                        <h2 className="mb-5 text-xl font-semibold">
                            Personal Information
                        </h2>

                        <div className="grid gap-5 sm:grid-cols-2">

                            <div>
                                <p className="text-sm text-gray-500">
                                    Full Name
                                </p>

                                <p className="mt-1 font-medium">
                                    {user.name}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Email
                                </p>

                                <p className="mt-1 font-medium">
                                    {user.email}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Role
                                </p>

                                <p className="mt-1 font-medium">
                                    Developer
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Status
                                </p>

                                <p className="mt-1 font-medium text-green-400">
                                    Active
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Divider */}
                    <div className="my-7 h-px bg-gray-800" />

                    {/* Skills */}
                    <div>
                        <h2 className="mb-4 text-xl font-semibold">
                            Skills
                        </h2>

                        <div className="flex flex-wrap gap-2">

                            <Button size="sm" variant="flat" color="primary">
                                React
                            </Button>

                            <Button size="sm" variant="flat" color="primary">
                                Next.js
                            </Button>

                            <Button size="sm" variant="flat" color="primary">
                                TypeScript
                            </Button>

                            <Button size="sm" variant="flat" color="primary">
                                Tailwind CSS
                            </Button>

                            <Button size="sm" variant="flat" color="primary">
                                MongoDB
                            </Button>

                        </div>
                    </div>

                </Card>

            </div>
        </div>
    );
};

export default ProfilePage;
