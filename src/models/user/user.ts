import { UserFields } from "./types";

class User {
  private _id: number
  private _name: string
	private _age: number
  private _phone: string

  constructor(fields: UserFields) {
    this._id = fields.id,
    this._name = fields.name,
    this._phone =  fields.phone,
    this._age =  fields.age
  }

  id() {
    return this._id;
  }

  name() {
    return this._name
  }

  age() {
    return this._age
  }

  phone() {
    return this._phone
  }

  
}


export default User;

