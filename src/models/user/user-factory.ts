import { UserFields, UserResponse } from "./types";
import User from "./user";

class UserFactory {
  static createFromResponse(response: UserResponse): User {
    return new User(this.mapResponseToFields(response));
  }

  static createManyFromResponse(response: UserResponse[]): User[] {
    return response.map(
      (response) => new User(this.mapResponseToFields(response))
    );
  }

  static mapResponseToFields(response: UserResponse): UserFields {
    return {
      id: response.id,
      name: response.name,
      age: response.age,
      phone: response.phone
    };
  }

  static toResponse(user: User): UserResponse {
    return {
      id: user.id(),
      name: user.name(),
      age: user.age(),
      phone: user.phone()
    };
  }

  static toFields(user: User): UserFields {
    return this.mapResponseToFields(this.toResponse(user));
  }
}

export default UserFactory;

