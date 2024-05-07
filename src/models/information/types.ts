export interface LocationDetails {
  country: string,
  state: string,
  city: string,
  neighborhood: string,
  number: string,
  postalCode: string,
  latitude: number,
  longitude: number
}

export interface InformationResponse {
  id: number
  reportId: number
  name: string
  phone: string
  email: string
  message: string
  locationDetails: LocationDetails
}

export interface InformationFields {
  id: number
  reportId: number
  name: string
  phone: string
  email: string
  message: string
  locationDetails: LocationDetails
}


