"use server";
import { LoginSchemaType } from "@/types";
import { FieldValues } from "react-hook-form";

export const register = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res?.ok) {
    console.error("User Registration Failed", await res.text());
  }
  return await res.json();
};

export const login = async (data: LoginSchemaType) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });
  console.log(res);

  const responseData = await res.json();

  if (responseData.success && responseData.data?.token) {
    return responseData;
  } else {
    console.error("Login failed, no token received");
    return null;
  }
};
