export type User = {
  name: string
  email: string
  password: string
  login: string
  location: Location
}

export type Location = {
  latitude: number
  longitude: number
  address: string
  city: string
  state: string
  zip_code: number
};
