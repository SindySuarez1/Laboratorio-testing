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

test("find by Id should return the correct user", ()=> {
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);
    let find = userController.findById(1234);
    expect(find).toStrictEqual(user);
});

test("find by Id should return the correct user version 2", ()=> {
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);
    let find = userController.findById(1234);
    expect(find).toEqual(user);
});
