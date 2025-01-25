<script lang="ts">
  import Back from "$lib/back.svelte";
  import Front from "$lib/front.svelte";
  import { useKey } from "$lib/use-key";
  import { cn } from "$lib/utils";

  const card = $state({
    showBack: false,
    flip() {
      this.showBack = !this.showBack;
    },
  });

  useKey(" ", () => card.flip());
</script>

<button
  type="button"
  onclick={() => card.flip()}
  class="size-96 [perspective:100rem] outline-none"
>
  <div
    class={cn(
      "relative h-full w-full transition duration-500 [transform-style:preserve-3d]",
      card.showBack && "[transform:rotateY(180deg)]"
    )}
  >
    <div
      class={cn("absolute inset-0 h-full w-full [backface-visibility:hidden]")}
    >
      <Front />
    </div>
    <div
      class={cn(
        "absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]"
      )}
    >
      <Back />
    </div>
  </div>
</button>
