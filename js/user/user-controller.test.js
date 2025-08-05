const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

//! TAREA 2
//prueba para la función add() 
test('add() agrega un usuario que no está en la lista', () => {
    let user = new User(1221,"amigos", "amigos@generation.org");
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
});
//prueba para la función remove() 
test('remove() no afecta si el usuario no está en la lista', () => {
    const user = new User(1221,"amigos", "amigos@generation.org");
    userController.remove(user); // No se agrega
    expect(userController.getUsers()).not.toContain(user);
    expect(userController.getUsers().length).toBeGreaterThanOrEqual(0);
});

//pruebas funcion findByEmail()
test('encontrar el usuario con email santiago@generation.org', () => {       
  const expectedUser = {
    id: 1234,
    name: 'Santiago',
    email: 'santiago@generation.org'
  };
  const result = userController.findByEmail('santiago@generation.org');
  expect(result).toEqual(expectedUser);
});

test('encontrar el usuario con email santiago@generation.org', () => {       
  const expectedUser = {
    id: 1221,
    name: 'amigos',
    email: 'amigos@generation.org'
  };
const result = userController.findByEmail('amigos@generation.org');
  expect(result).toEqual(expectedUser);
});


//pruebas funcion findById()
test("find by Id should return the correct user", ()=> {
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);
    let find = userController.findById(1234);
    expect(find).toStrictEqual(user);
});

test("find by Id should return the correct user", ()=> {
    let user = new User(1221,"amigos", "amigos@generation.org");
    userController.add(user);
    let find = userController.findById(1221);
    expect(find).toStrictEqual(user);
});
