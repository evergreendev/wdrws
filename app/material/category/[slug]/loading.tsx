import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import InnerPageContent from "@/app/components/InnerPageContent";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <InnerPageContent title="Loading..." content={<Skeleton height={"200px"} count={5}/>} width="LG"/>
}