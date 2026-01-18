'use client';

import React, { useId } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import OcIconClose from '@/components/atoms/icon/close';
import OcButtonIcon from '@/components/molecules/button-icon';
import OcButton from '@/components/molecules/button';
import OcCard from '@/components/atoms/card';

type ModalContentProps = {
	buttonText: string;
	title: string;
	description?: string;
	children: React.ReactNode;
	footer?: React.ReactNode;
	buttonClassName?: string;
	contentClassName?: string;
};

export function ModalContent({
	buttonText,
	title,
	description,
	children,
	footer,
	contentClassName,
}: ModalContentProps) {
	const descriptionId = useId();

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<OcButton
					color="secondary"
					label={buttonText}
					className="w-fit"
				/>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-black/80 z-60 data-[state=open]:animate-[modal-overlay-show_200ms] data-[state=closed]:animate-[modal-overlay-hide_200ms grid items-center justify-center overflow-y-auto">
					<Dialog.Content
						className={
							contentClassName ??
							'w-full max-w-5xl p-6 z-61 data-[state=open]:animate-[modal-show_200ms] data-[state=closed]:animate-[modal-hide_200ms]'
						}
						aria-label={description ? undefined : title}
						aria-describedby={
							description ? descriptionId : undefined
						}
					>
						<OcCard className="shadow-xl">
							<div className="flex items-start justify-between gap-4">
								<div>
									<Dialog.Title className="text-3xl text-primary-400">
										{title}
									</Dialog.Title>

									{description ? (
										<Dialog.Description className="mt-1 text-sm text-gray-600">
											{description}
										</Dialog.Description>
									) : null}
								</div>

								<Dialog.Close asChild>
									<OcButtonIcon
										color="white"
										icon={<OcIconClose />}
									/>
								</Dialog.Close>
							</div>

							<div className="mt-4 flex-1 min-h-0">
								{children}
							</div>

							{footer ? (
								<div className="mt-6 flex justify-end gap-2">
									{footer}
								</div>
							) : null}
						</OcCard>
					</Dialog.Content>
				</Dialog.Overlay>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
