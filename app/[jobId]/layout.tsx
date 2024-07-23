"use client"

import React from "react";

import Error from "next/error";

import { getJobData } from "@/app/helpers";

type JobLayoutProps = {
  children: React.ReactNode;
  params: { jobId: string };
};

const JobLayout = ({ children, params }: JobLayoutProps) => {
  const { jobId = "" } = params;

  const selectedJobData = getJobData(jobId);
  
  if (!selectedJobData) {
    return <Error statusCode={404} />
  };

  return (
    <>{children}</>
  );
};

export default JobLayout;
