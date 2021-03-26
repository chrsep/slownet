<script lang="ts">
  import { onMount, tick } from "svelte"

  let mapContainer

  onMount(async () => {
    await tick()
    const { map, tileLayer } = await import("leaflet")

    const myMap = map(mapContainer, {
      center: [51.505, -0.09],
      zoom: 13,
      preferCanvas: true
    })

    tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken: import.meta.env.VITE_MAPBOX_ACCESS_KEY
    }).addTo(myMap)
  })
</script>

<main>
  <div class="w-screen h-screen" bind:this={mapContainer}></div>
</main>
