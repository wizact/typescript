/// <reference path="Validation.ts" />
module Validation
{
    export class LettersOnly implements StringValidator {
        isValid(s: string) {
            return /^[A-Za-z]+$/.test(s);
        }
    }
}