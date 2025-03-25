"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "./icons";
import { useState } from "react";

export function LoginForm() {
  const [isLoading, setIsLoading] = useState<{
    google: boolean;
    kakao: boolean;
  }>({
    google: false,
    kakao: false,
  });

  const handleGoogleLogin = async () => {
    setIsLoading((prev) => ({ ...prev, google: true }));
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading((prev) => ({ ...prev, google: false }));
  };

  const handleKakaoLogin = async () => {
    setIsLoading((prev) => ({ ...prev, kakao: true }));
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading((prev) => ({ ...prev, kakao: false }));
  };

  return (
    <Card className="w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">Sign in</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button
          variant="outline"
          onClick={handleGoogleLogin}
          disabled={isLoading.google}
          className="w-full"
        >
          {isLoading.google ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.google className="mr-2 h-4 w-4" />
          )}
          Continue with Google
        </Button>

        <Button
          variant="outline"
          onClick={handleKakaoLogin}
          disabled={isLoading.kakao}
          className="w-full bg-[#FEE500] text-black hover:bg-[#FEE500]/90"
        >
          {isLoading.kakao ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.kakao className="mr-2 h-4 w-4" />
          )}
          Continue with Kakao
        </Button>
      </CardContent>
    </Card>
  );
}
