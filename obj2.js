let userManager = {
  users: [],
  addUser: function (userInfo) {
    this.users.push(userInfo);
  },
  removeUser: function (id) {
    if (this.users.length === 0) "No User Available";
   this.users= this.users.filter((element)=>{
        element.id!==id
    })
  },
  getuser: function (id) {
return this.users.filter((value)=> value.id===id)
  },
  listUser: function () {
    for (let i = 0; i < this.users.length; i++) {
        console.log( this.users[i].name);
    }
  },
};
const TanishManager=  userManager
TanishManager.addUser({id:1,name:"tanish",email:"tanish@ai.com"})
TanishManager.listUser()
console.log(
TanishManager.getuser(1)

);
TanishManager.removeUser(1)