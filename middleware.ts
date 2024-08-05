import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  
        // const cookie = req.cookies.get('auth')
        // const allCookies = req.cookies
        // const isAuth = req.cookies.has('auth')
        // req.cookies.delete('auth')
        // console.log(isAuth)

        // const response = NextResponse.next()
        // response.cookies.set('isAuthed2', 'true')
        // console.log('response', response.cookies)

        // const response = NextResponse.next({
        //     request: {
        //         headers: new Headers(req.headers),
        //     }
        // })
        // response.headers.forEach((header) => console.log('header', header))
        //  return response
     
    }


export const config = {
    matcher: '/'
}

// export function middleware(req: NextRequest) {
//     // console.log("request", req.nextUrl.pathname)
//     if(req.nextUrl.pathname.startsWith('/')){
//         console.log("mw ran")
//          return NextResponse.next()
//      }
//     }
