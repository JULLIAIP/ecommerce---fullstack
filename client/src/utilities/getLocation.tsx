import { Location } from "../types/Tusers";

export const getUserLocation = (): Promise<Location> =>
new Promise((resolve, reject) =>
  navigator.geolocation.getCurrentPosition(
    (position) =>
      resolve({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }),
    (error) => reject(`Erro ao obter a localização: ${error.message}`)
  )
);