import {UsersModel} from './Schema'

class Users  {
  async gets() {
    try{
      return await UsersModel.find()
    } catch (err) {console.log(err)}
  }
  async get(name) {
    try{
      return await UsersModel.findOne({name})
    } catch (err) {console.log(err)}
  }
  async create(args){
    try{
      return await UsersModel.create(args)
    } catch (err) {console.log(err)}
  }
  async update(args){
    try{
      const res = await UsersModel.updateOne({id:args.id}, args.user)
      console.log(res);
      return res
    } catch (err) {console.log(err)}
  }
  async delete(args){
    try{
      const res = await UsersModel.deleteOne(args)
      console.log(args)
      console.log(res)
      return res.deletedCount
    } catch (err) {console.log(err)}
  }
}

export default Users