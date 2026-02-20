export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  country: string;
  coordinates: Coordinates;
}

export interface Hair {
  color: string;
  type: string;
}

export interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}

export interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}

// export interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
//   maidenName: string;
//   age: number;
//   gender: "male" | "female";
//   email: string;
//   phone: string;
//   username: string;
//   birthDate: string;
//   image: string;
//   bloodGroup: string;
//   height: number;
//   weight: number;
//   eyeColor: string;
//   hair: Hair;
//   address: Address;
//   university: string;
//   bank: Bank;
//   company: Company;
//   crypto: Crypto;
//   role: string;
// }

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  ip: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    country: string;
  };
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
    };
  };
  role: "admin" | "moderator" | "user";
}



export interface UsersApiResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}