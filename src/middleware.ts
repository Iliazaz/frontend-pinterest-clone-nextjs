import { NextRequest } from "next/server";
import { EnumTokens } from "./services/endpoints/auth/auth-tokens.service";

export async function middleware(request: NextRequest) {
    const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value

    // const isAuthPage = request.url.includes()
}