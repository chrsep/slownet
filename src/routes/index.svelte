<script lang="ts">
  import { onMount, tick } from "svelte"
  import { browser } from "$app/env"

  let mapContainer

  onMount(async () => {
    await tick()

    if (browser) {
      const { setupMap } = await import("$lib/leaflet")
      setupMap(mapContainer)
    }
  })
</script>

<head>
  <title>Slownet</title>
</head>

<div class="fixed h-16 top-2 left-16 bg-white z-50 rounded shadow p-3 flex items-center">
  Test
</div>

<div class="w-screen h-screen z-0" bind:this={mapContainer} />
