import { shallowMount } from "@vue/test-utils";
import Indecision from "@/components/Indecision.vue"

describe('Indecision Component', () => {

    let wrapper;
    let clgSpy;

    global.fetch = jest.fn( () => Promise.resolve( {
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/15-3d723ea13af91839a671d4791fc53dcc.gif'
        })
    }))

    beforeEach( () => {
        wrapper = shallowMount( Indecision )

        clgSpy = jest.spyOn( console, 'log' )

        jest.clearAllMocks()
    })

    test('ha de coincidir amb la captura', () => {

        expect( wrapper.html() ).toMatchSnapshot()

    })

    //Hem de fer la tècnica Spy per veure quan succeeix alguna cosa
    test("Escriure a l'input no ha de disparar res (console.log)", async() =>{

        //Necessitem el .vm per anar a la instància de Vue i llegir el mètode getAnswer
        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )

        const input = wrapper.find('input')
        await input.setValue('Hola, món!')

        expect( clgSpy ).toHaveBeenCalledTimes(1)
        expect( getAnswerSpy ).toHaveReturnedTimes(0)

        //console.log(wrapper.vm)

    })

    test("Escriure el símbol '?' ha de disparar el getAnswer", async() => {

        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('?')

        expect( clgSpy ).toHaveBeenCalledTimes(1)
        expect( getAnswerSpy ).toHaveBeenCalled()

    })

    test('Proves al getAnswer', async() => {

       await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect(img.exists() ).toBeTruthy()
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/15-3d723ea13af91839a671d4791fc53dcc.gif')
        expect(wrapper.vm.answer).toBe('Sí!')

    })

    test('Proves al getAnswer - Error en el API', async() => {

        fetch.mockImplementationOnce( () => Promise.reject('API is down') )

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect(img.exists() ).toBeFalsy()
        expect(wrapper.vm.answer).toBe('No hem pogut carregar API')

    })

})