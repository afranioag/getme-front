import { Gender, LastSeenLocation, PersonFields, PersonStatus } from "./types";

class Person {
  private _id: number;
  private _name: string;
  private _age: number;
  private _height: number;
  private _hairColor: string;
  private _eyeColor: string;
  private _gender: Gender;
  private _bodyMark: string;
  private _physicalDescription: string;
  private _psychologicalDescription: string;
  private _lastSeenLocation: LastSeenLocation;
  private _document: string;
  private _status: PersonStatus;
  private _image: string;

  constructor(fields: PersonFields) {
    this._id = fields.id;
    this._name = fields.name;
    this._age = fields.age;
    this._height = fields.height;
    this._hairColor = fields.hairColor;
    this._eyeColor = fields.eyeColor;
    this._gender = fields.gender;
    this._bodyMark = fields.bodyMark;
    this._physicalDescription = fields.physicalDescription;
    this._psychologicalDescription = fields.psychologicalDescription;
    this._lastSeenLocation = fields.lastSeenLocation;
    this._document = fields.document;
    this._status = fields.status;
    this._image = fields.image;
  }

  id(): number {
    return this._id;
  }

  name(): string {
    return this._name;
  }

  age(): number {
    return this._age;
  }

  height(): number {
    return this._height;
  }

  hairColor(): string {
    return this._hairColor;
  }

  eyeColor(): string {
    return this._eyeColor;
  }

  gender(): Gender {
    return this._gender;
  }

  bodyMark(): string {
    return this._bodyMark;
  }

  physicalDescription(): string {
    return this._physicalDescription;
  }

  psychologicalDescription(): string {
    return this._psychologicalDescription;
  }

  lastSeenLocation(): LastSeenLocation {
    return this._lastSeenLocation;
  }

  document(): string {
    return this._document;
  }

  status(): PersonStatus {
    return this._status;
  }

  image(): string {
    return this._image;
  }
}

export default Person;
