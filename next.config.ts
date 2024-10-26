import {withSentryConfig} from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {

};

export default withSentryConfig(nextConfig, {


org: "adreno-store",
project: "starter",


silent: !process.env.CI,


widenClientFileUpload: true,

reactComponentAnnotation: {
enabled: true,
},


tunnelRoute: "/monitoring",


hideSourceMaps: true,


disableLogger: true,


automaticVercelMonitors: true,
});