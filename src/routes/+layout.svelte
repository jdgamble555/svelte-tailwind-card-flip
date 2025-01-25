<script lang="ts">
  import "../app.css";
  let { children } = $props();
</script>

<div class="flex items-center justify-center h-screen">
  {@render children()}
</div>
