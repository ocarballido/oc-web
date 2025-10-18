import {
	forwardRef,
	type PropsWithChildren,
	type ComponentPropsWithoutRef,
} from 'react';

type OcCardProps = PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

const OcCard = forwardRef<HTMLDivElement, OcCardProps>(
	({ children, className, ...rest }, ref) => (
		<div
			ref={ref}
			className={`p-6 rounded-2xl bg-white dark:bg-(--background-light) ${className}`}
			{...rest}
		>
			{children}
		</div>
	)
);
OcCard.displayName = 'OcCard';

export default OcCard;
