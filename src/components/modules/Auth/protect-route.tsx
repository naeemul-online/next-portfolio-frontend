"use client";

import Loading from "@/components/ui/Loading";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if session is loaded
    if (status === "loading") {
      return; // Wait for session to load
    }

    if (!session || session.user?.role !== "ADMIN") {
      router.push("/auth/login"); // Redirect if not authorized
    } else {
      setIsLoading(false); // Stop loading once the session is valid
    }
  }, [session, status, router]);

  // Display a loading state or children
  if (isLoading) {
    return <Loading />; // Optionally show a loading spinner or message
  }

  return <>{children}</>;
}
