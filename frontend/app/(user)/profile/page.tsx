import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import {
  ArrowLeft,
  Check,
  Mail,
  ShieldCheck,
  User,
} from "lucide-react";

import getProfile from "@/lib/api/get-profile";

export default async function ProfilePage() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  const student = await getProfile(accessToken!);

  const {
    email,
    first_name,
    last_name,
    role,
    profile_image,
    is_email_verified,
  } = student;

  return (
    <main className="min-h-[calc(100vh-4rem)] px-6 py-10">
      <div className="mx-auto max-w-4xl">

        {/* Back */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to dashboard
        </Link>

        {/* Profile Card */}
        <div className="mt-8 overflow-hidden rounded-2xl border bg-background shadow-sm">

          {/* Cover */}
          <div className="h-32 bg-primary/10" />

          {/* Profile Header */}
          <div className="px-6 pb-8 sm:px-8">

            <div className="-mt-12 flex flex-col gap-5 sm:flex-row sm:items-end">

              {/* Profile Image */}
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-background bg-muted shadow-md sm:h-36 sm:w-36">
                <Image
                  src={profile_image}
                  alt={`${first_name} ${last_name}`}
                  fill
                  sizes="(max-width: 640px) 128px, 144px"
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <div className="pb-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl font-bold tracking-tight">
                    {first_name} {last_name}
                  </h1>

                  {is_email_verified && (
                    <span
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500"
                      title="Email verified"
                    >
                      <Check
                        className="h-3 w-3 text-white"
                        strokeWidth={3}
                      />
                    </span>
                  )}
                </div>

                <p className="mt-1 text-sm text-muted-foreground">
                  {email}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Account Information */}
        <section className="mt-8">
          <div>
            <h2 className="text-xl font-semibold">
              Account Information
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Your personal account details.
            </p>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border bg-background">

            {/* Full Name */}
            <div className="flex items-center gap-4 border-b p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted">
                <User className="h-5 w-5 text-muted-foreground" />
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  Full Name
                </p>

                <p className="mt-1 text-sm font-medium">
                  {first_name} {last_name}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 border-b p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted">
                <Mail className="h-5 w-5 text-muted-foreground" />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">
                  Email Address
                </p>

                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <p className="text-sm font-medium break-all">
                    {email}
                  </p>

                  {is_email_verified ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-600">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500">
                        <Check
                          className="h-2.5 w-2.5 text-white"
                          strokeWidth={3}
                        />
                      </span>
                      Verified
                    </span>
                  ) : (
                    <span className="rounded-full bg-destructive/10 px-2.5 py-1 text-xs font-medium text-destructive">
                      Not verified
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Email Verification */}
            <div className="flex items-center gap-4 border-b p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/10">
                <ShieldCheck className="h-5 w-5 text-green-600" />
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  Email Verification
                </p>

                {is_email_verified ? (
                  <div className="mt-1 flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                      <Check
                        className="h-3 w-3 text-white"
                        strokeWidth={3}
                      />
                    </span>

                    <span className="text-sm font-medium text-green-600">
                      Email verified
                    </span>
                  </div>
                ) : (
                  <p className="mt-1 text-sm font-medium text-destructive">
                    Email not verified
                  </p>
                )}
              </div>
            </div>

            {/* Account Type */}
            <div className="flex items-center justify-between gap-4 p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    Account Type
                  </p>

                  <p className="mt-1 text-sm font-medium capitalize">
                    {role.toLowerCase()}
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium capitalize text-primary">
                {role.toLowerCase()}
              </span>
            </div>
          </div>
        </section>

        {/* Profile Actions */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold">
            Account
          </h2>

          <div className="mt-5 rounded-2xl border bg-background p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium">
                  Manage your account
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Update your profile information and account
                  settings.
                </p>
              </div>

              <button
                type="button"
                className="inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm font-medium transition-colors hover:bg-muted"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
