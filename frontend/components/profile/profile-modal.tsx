"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, Mail, ShieldCheck, User, X } from "lucide-react";

import { StudentProfile } from "@/types/auth";

interface ProfileModalProps {
  student: StudentProfile;
}

export default function ProfileModal({
  student,
}: ProfileModalProps) {
  const [open, setOpen] = useState(false);

  const {
    email,
    first_name,
    last_name,
    role,
    profile_image,
    is_email_verified,
  } = student;

  const initials =
    `${first_name.charAt(0)}${last_name.charAt(0)}`.toUpperCase();

  return (
    <>
      {/* Profile Avatar */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative h-11 w-11 overflow-hidden rounded-full shadow-md ring-2 ring-transparent transition-all hover:scale-105 hover:ring-primary/30"
        title={`${first_name} ${last_name}`}
      >
        <Image
          src={profile_image}
          alt={`${first_name} ${last_name}`}
          fill
          sizes="44px"
          className="object-cover"
        />
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-2xl border bg-background shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Close profile"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Profile Header */}
            <div className="flex flex-col items-center px-6 pb-6 pt-8">
              <div className="relative h-20 w-20 overflow-hidden rounded-full shadow-md ring-2 ring-primary/10">
                <Image
                  src={profile_image}
                  alt={`${first_name} ${last_name}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>

              <h2 className="mt-4 text-xl font-bold">
                {first_name} {last_name}
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                {email}
              </p>

              <span className="mt-3 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {role}
              </span>
            </div>

            {/* Information */}
            <div className="border-t">
              {/* Name */}
              <div className="flex items-center gap-4 px-6 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    Full Name
                  </p>

                  <p className="text-sm font-medium">
                    {first_name} {last_name}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 border-t px-6 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    Email
                  </p>

                  <p className="text-sm font-medium">
                    {email}
                  </p>
                </div>
              </div>

              {/* Verification */}
              <div className="flex items-center gap-4 border-t px-6 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <ShieldCheck className="h-5 w-5 text-muted-foreground" />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    Email Verification
                  </p>

                  {is_email_verified ? (
                    <div className="mt-1 flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </span>
                      <span className="text-sm font-medium text-green-600">
                        Verified
                      </span>
                    </div>
                  ) : (
                    <div className="mt-1 flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-destructive/10">
                        <X className="h-3 w-3 text-destructive" />
                      </span>
                      <span className="text-sm font-medium text-destructive">
                        Not verified
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 border-t bg-muted/30 p-5">
              <Link
                href="/profile"
                onClick={() => setOpen(false)}
                className="flex h-10 flex-1 items-center justify-center rounded-md border bg-background px-4 text-sm font-medium transition-colors hover:bg-muted"
              >
                View Profile
              </Link>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="h-10 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
