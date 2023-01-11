import { NextRequest, NextResponse  } from "next/server";

import { getIronSession } from "iron-session/edge";
// import jsonwebtoken from 'jsonwebtoken';

import { ironOptions } from "./lib/config";

export const middleware = async (req) => {

    if (req.nextUrl.pathname.startsWith('/recipies')) {
        

        // 1) Check if the cookie exists, if not, to log in
        if(!req.cookies.has("foodSearch_cookie")) return NextResponse.redirect( new URL('/login', req.nextUrl.origin).href );

        // 2) Get the session
        const res = NextResponse.next();
        const session = await getIronSession(req, res, ironOptions);

        // 3) If no user back to login
        if(!session || !session.user) return NextResponse.redirect( new URL('/login', req.nextUrl.origin).href );

        return res;
    }
}

export const config = {
    matcher: '/:path*',
}