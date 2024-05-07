import { InformationFields, LocationDetails } from "./types";

class Information {
    private _id: number
    private _reportId: number
    private _name: string
    private _phone: string
    private _email: string
    private _message: string
    private _locationDetails: LocationDetails

  constructor(fields: InformationFields) {
    this._id = fields.id,
    this._reportId = fields.reportId,
    this._name = fields.name,
    this._phone =  fields.phone,
    this._email = fields.email,
    this._message = fields.message,
    this._locationDetails = fields.locationDetails
  }

  id() {
    return this._id;
  }

  reportId() {
    return this._reportId
  }

  name() {
    return this._name
  }

  phone() {
    return this._phone
  }

  email() {
    return this._email
  }

  message() {
    return this._message
  }

  locationDetails() {
    return this._locationDetails
  }
}

export default Information;