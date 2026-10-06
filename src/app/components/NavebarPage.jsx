"use client"
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const NavebarPage = () => {

    const { data: session, isPending } = useSession()

    if (isPending) {
        return (
            <nav className="sticky top-0 z-50 border-b bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                    <div className="text-2xl font-bold">
                        Tech<span className="text-red-600">World</span>
                    </div>

                    <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200" />
                </div>
            </nav>
        );
    }

    const auth = <>

        {
            session?.user ? <>
                <Link className="flex items-center gap-2" href={'/profile'}>
                    <Avatar>
                        <Avatar.Image
                            alt={session.user.name || "Profile"}
                            src={session.user.image || ""}
                        />
                    </Avatar>
                    <span>Welcame, {session.user.name}</span>
                </Link>
                <Button variant="danger" onClick={() => signOut()} >Sign out</Button>
            </> :
                <>
                    <Link
                        href="/sign-in"
                        className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                    >
                        Sign In
                    </Link>

                    <Link
                        href="/sign-up"
                        className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                    >
                        Sign Up
                    </Link>
                </>
        }

    </>

    return (
        <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold text-gray-900"
                >
                    Tech<span className="text-red-600">World</span>
                </Link>

                {/* Auth Buttons */}
                <div className="flex items-center gap-3">
                    {auth}
                </div>
            </div>
        </nav>
    );
};

export default NavebarPage;
