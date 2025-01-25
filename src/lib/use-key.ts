import { onMount } from 'svelte';


export function useKey(
    key: string | string[],
    callback: (event: KeyboardEvent) => void,
    options: {
        event?: 'keydown' | 'keyup' | 'keypress',
        preventDefault?: boolean,
    } = {}
) {
    const {
        event = 'keydown',
        preventDefault = false,
    } = options;

    function handler(e: KeyboardEvent) {
        const keys = Array.isArray(key) ? key : [key];
        if (keys.includes(e.key)) {
            if (preventDefault) {
                e.preventDefault();
            }
            callback(e);
        }
    }

    onMount(() => {
        addEventListener(event, handler);
        return () => {
            removeEventListener(event, handler);
        };
    });
}