const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
    it('Caso não seja passado argumentos. Deverá retornar o objeto:`', () => {
        const object = {
            Tuesday: { open: 8, close: 6 },
            Wednesday: { open: 8, close: 6 },
            Thursday: { open: 10, close: 8 },
            Friday: { open: 10, close: 8 },
            Saturday: { open: 8, close: 10 },
            Sunday: { open: 8, close: 8 },
            Monday: { open: 0, close: 0 },
        };
        expect(getOpeningHours()).toEqual(object);
    });
    it('Para os argumentos `Monday` e `09:00-AM` deve retornar a string `The zoo is closed`', () => {
        expect(getOpeningHours('monday', '09:00-AM')).toStrictEqual('The zoo is closed');
    });
    it('Para os argumentos `Tuesday` e `09:00-AM` deve retornar a string `The zoo is open`', () => {
        expect(getOpeningHours('Tuesday', '09:00-AM')).toStrictEqual('The zoo is open');
    });
    it('Para os argumentos `Wednesday` e `09:00-PM` deve retornar a string `The zoo is closed`', () => {
        expect(getOpeningHours('Wednesday', '09:00-PM')).toStrictEqual('The zoo is closed');
    });
    it('Para os argumentos `Thu` e `09:00-AM` deve lançar uma exceção com a mensagem: `The day must be valid. Example: Monday`', () => {
        function testGetOpeningHours() {
            getOpeningHours('Thu', '09:00-AM');
        }
        expect(testGetOpeningHours).toThrowError('The day must be valid. Example: Monday');
    });
    it('Para os argumentos `Friday` e `09:00-ZM` deve lançar uma exceção com a mensagem: `The abbreviation must be \'AM\' or \'PM\'`', () => {
        function testAbbreviation() {
            getOpeningHours('Friday', '09:00-ZM');
        }
        expect(testAbbreviation).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
    });
    it('Para os argumentos `Saturday` e `C9:00-AM` deve lançar uma exceção com a mensagem: `The hour should represent a number`', () => {
        function testErrorHour() {
            getOpeningHours('Saturday', 'C9:00-AM');
        }
        expect(testErrorHour).toThrowError('The hour should represent a number');
    });
    it('Para os argumentos `Sunday` e `09:c0-AM` deve lançar uma exceção com a mensagem: `The minutes should represent a number`', () => {
        function testErrorMinute() {
            getOpeningHours('Sunday', '09:c0-AM');
        }
        expect(testErrorMinute).toThrowError('The minutes should represent a number');
    });
    it('Para os argumentos `Monday` e `13:00-AM` deve lançar uma exceção com a mensagem: `The hour must be between 0 and 12`', () => {
        function testValueHour() {
            getOpeningHours('Monday', '13:00-AM');
        }
        expect(testValueHour).toThrowError('The hour must be between 0 and 12');
    });
    it('Para os argumentos `Tuesday` e `09:60-AM` deve lançar uma exceção com a mensagem: `The minutes must be between 0 and 59`', () => {
        function testValueMinute() {
            getOpeningHours('Tuesday', '09:60-AM');
        }
        expect(testValueMinute).toThrowError('The minutes must be between 0 and 59');
    });
});
