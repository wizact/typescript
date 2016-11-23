module GenericModule {
    interface StringValidator {
        isValid(s: string): boolean;
    }

    class LettersOnly implements StringValidator {
        isValid(s: string) {
            return /^[A-Za-z]+$/.test(s);
        }
    }

    class ZipCodeOnly implements StringValidator {
        isValid(s: string) {
            return s.length === 5 && /^[0-9]+$/.test(s);
        }
    }

    var validators: { [s: string]: StringValidator } = {};
    validators['Letters Only'] = new LettersOnly();
    validators['ZipCode Only'] = new ZipCodeOnly();

    ['Hello', '98052', '101'].forEach(s => {
        for (var name in validators) {
            console.log(`Value ${s} with filter ${name} yeilds ${validators[name].isValid(s)}`);
        }
    });
}