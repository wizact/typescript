/// <reference path="Validation.ts" />
module Validation
{
    export class ZipCodeOnly implements StringValidator {
        isValid(s: string) {
            return s.length === 5 && /^[0-9]+$/.test(s);
        }
    }
}