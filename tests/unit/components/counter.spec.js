//Els components de Vue es renderitzen en un espai virtual
//shallowMount munta el component no profundament per fer-lo servir
import {shallowMount, mount} from '@vue/test-utils'
import Counter from '@/components/Counter.vue'
describe('Counter Component', () => {

    let wrapper = shallowMount( Counter )

    beforeEach( () => {

        wrapper = shallowMount( Counter )

    } )


    //TESTS PER VERIFICAR HTML
    // test('ha de coincidir amb la captura', () => {

    //    const wrapper = shallowMount( Counter )

    //    expect( wrapper.html() ).toMatchSnapshot()

    //})

    //Verificar el valor de l'etiqueta HTML
    test('H2 ha de tenir el valor per defecte "Counter"', () => {

        expect( wrapper.find('h2').exists() ).toBeTruthy()

        const h2Value = wrapper.find('h2').text()

        expect( h2Value ).toBe('Counter')

    })

    test('El valor per defecte ha de ser 100 al p', () => {

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

        //Arrange
        const [buttonIncrease, buttonDecrease] = wrapper.findAll('button')

        //Act
        await buttonIncrease.trigger('click')
        await buttonIncrease.trigger('click')
        await buttonIncrease.trigger('click')
        await buttonDecrease.trigger('click')
        await buttonDecrease.trigger('click')

        //Assert
        const value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('101')

    })

    //TEST PER VERIFICAR DE L'SCRIPT
    //Llegir props des de proves
    test("Ha d'establir el valor per defecte", () => {

        //const startProps = wrapper.props('start')
        //console.log( typeof startProps )

        const { start } = wrapper.props()

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(+value).toBe( start )

    })

    //Assegurar que rebem el title com una propietat, llegir el valor i assegurar que es mostra a customTitle
    test('ha de mostrar la prop title', () =>{

        const title = 'Hola!!'

        const wrapper = shallowMount( Counter, {
            props:{
                title,
            }
        } )

        expect(wrapper.find('h2').text()).toBe(title)

    })

})