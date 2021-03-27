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

<main>
  <div class="w-screen h-screen" bind:this={mapContainer} />
</main>
