import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.toLowerCase() === "/waterwatch") {
        return NextResponse.redirect(
            new URL("/western-dakota-regional-water-watch", request.url),
            308
        );
    }

    return NextResponse.next();
}