module ValidationModule
{
    export interface StringValidator {
        isValid(s: string): boolean;
    }

    export class LettersOnly implements StringValidator {
        isValid(s: string) {
            return /^[A-Za-z]+$/.test(s);
        }
    }

    export class ZipCodeOnly implements StringValidator {
        isValid(s: string) {
            return s.length === 5 && /^[0-9]+$/.test(s);
        }
    }
}

var validators: { [s: string]: ValidationModule.StringValidator } = {};
validators['Letters Only'] = new ValidationModule.LettersOnly();
validators['ZipCode Only'] = new ValidationModule.ZipCodeOnly();

['Hello', '98052', '101'].forEach(s => {
    for (var name in validators) {
        console.log(`Value ${s} with filter ${name} yeilds ${validators[name].isValid(s)}`);
    }
});