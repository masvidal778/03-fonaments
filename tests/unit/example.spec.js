
//testsuite
describe( 'Example Component', () => {
  //dins d'un test suite es poden fer molts tests
  test( 'Ha de ser més gran de 10', () => {

    //Arrange (preparar pel test)
    let value = 5;

    //Act (provar)
    value = value + 2;

    //Assert (verificar)
    if(value > 10){
      //TODO tot bé
    }else{
      throw `${value} no és més gran de 10`
    }
  })

} )