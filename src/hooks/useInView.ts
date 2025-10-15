'use client';
import { useEffect, useRef, useState } from 'react';

type Options = {
	rootMargin?: string;
	threshold?: number | number[];
	once?: boolean;
};

export function useInView<T extends Element>({
	rootMargin = '0px 0px -20px 0px', // entra un pelín antes de tocar el bottom
	threshold = 0.1,
	once = true,
}: Options = {}) {
	const ref = useRef<T | null>(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		// Fallback básico: si no hay IO, deja todo visible (evita FOUC en navegadores raros)
		if (typeof IntersectionObserver === 'undefined') {
			setInView(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					if (once) observer.unobserve(entry.target);
				} else if (!once) {
					setInView(false);
				}
			},
			{ root: null, rootMargin, threshold }
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [rootMargin, threshold, once]);

	return { ref, inView };
}
