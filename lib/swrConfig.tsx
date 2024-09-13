"use client";

import { SWRConfig } from "swr";

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const SWRGlobalConfig = ({
  children,
}: {
  children: React.ReactNode;
}) => <SWRConfig value={{ fetcher: fetcher }}>{children}</SWRConfig>;
