import {UsersModel} from './Schema'

class Users  {
  getUsers() {
    return UsersModel.find((err, res)=>{
      if(err) throw err
      return res
    })
  }
  getUser(name) {
    return UsersModel.findOne({name}, (err, res)=>{
      if(err) throw err
      console.log(res);
      return res
    })
  }
}

export default Users