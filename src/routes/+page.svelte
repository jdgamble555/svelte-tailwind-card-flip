<script lang="ts">
	import Back from '$lib/back.svelte';
	import Front from '$lib/front.svelte';
	import { useKey } from '$lib/use-key';
	import { cn } from '$lib/utils';

	const card = $state({
		showBack: false,
		flip() {
			this.showBack = !this.showBack;
		}
	});

	useKey(' ', () => card.flip());
</script>

<button type="button" onclick={() => card.flip()} class="size-96 outline-none [perspective:50rem]">
	<div
		class={cn(
			'relative size-full transition duration-1000 [transform-style:preserve-3d]',
			card.showBack && '[transform:rotateY(180deg)]'
		)}
	>
		<div class="absolute inset-0 size-full [backface-visibility:hidden]">
			<Front />
		</div>
		<div
			class="absolute inset-0 size-full [backface-visibility:hidden] [transform:rotateY(180deg)]"
		>
			<Back />
		</div>
	</div>
</button>
