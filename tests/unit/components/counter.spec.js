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

        //find buscarà el primer element, findAll tots els h2 que hi hagi
        const h2Value = wrapper.find('h2').text()

        expect( h2Value ).toBe('Counter')

    })

})