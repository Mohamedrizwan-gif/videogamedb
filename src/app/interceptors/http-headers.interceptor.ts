import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
                'x-rapidapi-key': 'a83be618bamshf5e6bf0705145b3p1ace70jsnf8053fd0f77b'
            },
            setParams: {
                key: '8c33ef2e7bb74bd0bac204bc369a490f'  
            }
        })
        return next.handle(req);
    }
}