const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
    it('Retornar a quantidade de elefantes quando for passado como parâmetro `count` na função HandlerElephants',() =>
    {
    expect(handlerElephants('count')).toEqual(4); 
    })

    it('Quando colocado como parâmetro `names`retornar um array com a relação dos nomes de todos os elefantes',() =>
    {
    expect(handlerElephants('names')).toEqual([ 'Ilana', 'Orval', 'Bea', 'Jefferson' ]); 
    })

    it('Quando colocado como parâmetro `averageAge`retornar a média de idade dos elefantes',() =>
    {
    expect(handlerElephants('averageAge')).toEqual(10.5); 
    })

    it('Quando colocado como parâmetro `location`retornar a localização dos elefantes dentro do Zoológico',() =>
    {
    expect(handlerElephants('location')).toStrictEqual('NW'); 
    })

    it('Quando colocado como parâmetro `popularity`retornar a popularidade dos elefantes',() =>
    {
    expect(handlerElephants('popularity')).toEqual(5); 
    })

    it('Quando colocado como parâmetro `availability`retornar um array com a relação de dias em que é possível visitar os elefantes',() =>
    {
    expect(handlerElephants('availability')).toEqual([ 'Friday', 'Saturday', 'Sunday', 'Tuesday' ]); 
    })
    it('Quando colocado um parâmetro inexistente retornar `null`',() =>
    {
    expect(handlerElephants('xmfjeofe')).toBeNull(); 
    })
    it('Quando não colocado nenhum parâmetro retornar `undefined`',() =>
    {
    expect(handlerElephants()).toBeUndefined(); 
    })
    it('Quando o parâmetro passado não for do tipo string retornar `Parâmetro inválido, é necessário uma string`',() =>
    {
    expect(handlerElephants(12233)).toStrictEqual('Parâmetro inválido, é necessário uma string'); 
    })

      });
