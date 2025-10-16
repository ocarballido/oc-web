// src/components/atoms/in-view/index.tsx
'use client';
import { ElementType, ReactNode, useMemo } from 'react';
import clsx from 'clsx';
import { useInView } from '@/hooks/useInView';

type InViewProps = {
	as?: ElementType;
	children: ReactNode;
	className?: string;
	once?: boolean;
	margin?: string;
	threshold?: number | number[];
	delay?: number; // ms
	durationMs?: number; // ms
	outOpacityLagMs?: number; // ms
};

export function OcInView({
	as: Tag = 'div',
	children,
	className,
	once = true,
	margin,
	threshold = 0.1,
	delay = 0,
	durationMs = 700,
	outOpacityLagMs = 120,
}: InViewProps) {
	// ref tipado *estrictamente* a HTMLDivElement
	const { ref, inView } = useInView<HTMLDivElement>({
		rootMargin: margin,
		threshold,
		once,
	});

	const style = useMemo<React.CSSProperties>(() => {
		// transform inline para asegurar interpolación de scale en todos los casos
		const t = `translate3d(0,0,0) scale(${inView ? 1 : 0.7})`;
		return {
			transform: t,
			transitionProperty: 'transform, opacity',
			transitionDuration: `${durationMs}ms, ${durationMs}ms`,
			transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
			// entrada: sincronizado; salida: opacity con lag para ver bien el scale
			transitionDelay: inView
				? `${delay}ms, ${delay}ms`
				: `${delay}ms, ${delay + outOpacityLagMs}ms`,
		};
	}, [inView, delay, durationMs, outOpacityLagMs]);

	return (
		<Tag className={className}>
			<div
				ref={ref} // <- sin any
				className={clsx(
					'transform-gpu will-change-transform',
					// Tailwind v4: una sola utilidad de transición que incluya ambas props
					'transition duration-700 ease-out',
					inView ? 'opacity-100' : 'opacity-0',
					// accesibilidad
					'motion-reduce:opacity-100 motion-reduce:transition-none h-full'
				)}
				style={style}
			>
				{children}
			</div>
		</Tag>
	);
}
