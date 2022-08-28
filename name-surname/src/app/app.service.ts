import { Injectable } from "@angular/core";

@Injectable()
export class AppService {
    toUpperCase(value: string) {
        return value?.toUpperCase?.();
    }
}