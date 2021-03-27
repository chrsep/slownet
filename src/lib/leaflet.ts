import { map, tileLayer } from "leaflet"

export const setupMap = (mapContainer) => {
  const myMap = map(mapContainer, {
    center: [51.505, -0.09],
    zoom: 13,
    preferCanvas: true,
  })

  tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/dark-v10",
      tileSize: 512,
      zoomOffset: -1,
      // @ts-ignore
      accessToken: import.meta.env.VITE_MAPBOX_ACCESS_KEY as string,
    }
  ).addTo(myMap)

  return myMap
}
