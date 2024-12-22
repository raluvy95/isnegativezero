<script lang="ts">
	import isNegativeZero from 'is-negative-zero';
	import { fly } from 'svelte/transition';

	let value = $state<string | undefined>(undefined);
	let status: undefined | boolean = $state(undefined);

	$effect(() => {
		if (value === undefined || value.length < 1) {
			status = undefined;
			return;
		}

		if (!isNaN(Number(value)) && isNegativeZero(Number(value))) {
			status = true;
		} else {
			status = false;
		}
	});
</script>

<div class="hero bg-base-200 c-min-h-screen">
	<div class="hero-content text-center">
		<div>
			<h1 class="text-5xl font-bold">Is Negative Zero?</h1>
			<p class="py-6">Let's check if your input is negative zero</p>
			<input
				type="text"
				placeholder="Type here"
				bind:value
				class="input input-bordered w-full max-w-xs transition-colors {status !== undefined
					? status
						? 'input-success'
						: 'input-error'
					: ''}"
			/>
			{#if status !== undefined}
				<p
					class="text-sm p-3 absolute flex items-center justify-center transition-colors {status
						? 'text-success c-left-success'
						: 'text-error c-left-error'}"
					transition:fly={{ y: 30, duration: 800 }}
				>
					{!status ? "That's not a negative zero." : "That's correct. It is a negative zero!"}
				</p>
			{/if}
		</div>
	</div>
</div>

<footer class="footer bg-base-200 footer-center p-10 select-none">
	<aside>
		<p>
			&lt;3 &bull;
			<a class="link link-primary link-hover" href="https://github.com/raluvy95/isnegativezero"
				>Source code</a
			>
		</p>
	</aside>
</footer>

<style lang="scss">
	// Prefix "c-" stands for custom
	.c-left-success {
		left: 41%;
	}
	.c-left-error {
		left: 43.5%;
	}

	.c-min-h-screen {
		min-height: 89vh;
	}
</style>
