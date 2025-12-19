import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = await currentUser();

    if (!user) {
        redirect("/");
    }

    const adminEmail = "zokuai7@gmail.com";
    const email = user.emailAddresses.find(
        (e) => e.emailAddress === adminEmail
    );

    if (!email) {
        redirect("/");
    }

    return <>{children}</>;
}
