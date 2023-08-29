
//testsuite
describe( 'Example Component', () => {
  //dins d'un test suite es poden fer molts tests
  test( 'Ha de ser més gran de 10', () => {

    //Arrange (preparar pel test)
    let value = 9;

    //Act (provar)
    value = value + 2;

    //Assert (verificar)
    expect(value).toBeGreaterThan(10);

  })

} )