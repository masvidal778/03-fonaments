//Els components de Vue es renderitzen en un espai virtual
//shallowMount munta el component no profundament per fer-lo servir
import {shallowMount, mount} from '@vue/test-utils'
import Counter from '@/components/Counter.vue'
describe('Counter Component', () => {

    // test('ha de coincidir amb la captura', () => {

    //    const wrapper = shallowMount( Counter )

    //    expect( wrapper.html() ).toMatchSnapshot()

    //})

    //Verificar el valor de l'etiqueta HTML
    test('H2 ha de tenir el valor per defecte "Counter"', () => {

        const wrapper = shallowMount( Counter )

        expect( wrapper.find('h2').exists() ).toBeTruthy()

        const h2Value = wrapper.find('h2').text()

        expect( h2Value ).toBe('Counter')

    })

    test('El valor per defecte ha de ser 100 al p', () => {

        //Wrapper
        const wrapper = shallowMount( Counter )

        //pTags
        //const pValue = wrapper.findAll('p')
        const value = wrapper.find('[data-testid="counter"]').text()

        //Expect segon p === 100
        //expect(  pValue[1].text().toBe('100')
        expect( value ).toBe("100")

    })

    //simular events
    //Si algú fa click al botó incrementar el valor del counter ha de canviar
    //Cal fer-la async per poder usar await i esperar a què renderitzi
    test("Ha d'incrementar i decrementar en 1 el comptador", async () => {

        const wrapper = shallowMount( Counter )

        const btnIncreaseDecrease = wrapper.findAll('button')

        await btnIncreaseDecrease[0].trigger('click')
        await btnIncreaseDecrease[0].trigger('click')
        await btnIncreaseDecrease[0].trigger('click')

        await btnIncreaseDecrease[1].trigger('click')
        await btnIncreaseDecrease[1].trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('101')

    })


})