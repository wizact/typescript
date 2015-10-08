module Validation
{
    export interface StringValidator {
        isValid(s: string): boolean;
    }
}