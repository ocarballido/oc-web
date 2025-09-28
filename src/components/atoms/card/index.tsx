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
			className={`p-6 rounded-2xl bg-white shadow-xs ${className}`}
			{...rest}
		>
			{children}
		</div>
	)
);

export default OcCard;
