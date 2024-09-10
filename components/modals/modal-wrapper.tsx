'use client';

import React from 'react';
import {
	useModal,
	ModalContentProps,
} from '@/lib/providers/ModalContext';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface ModalData {
	title: string;
}

export function createModal<T extends ModalData>(
	ModalContent: React.FC<ModalContentProps<T>>
) {
	return function ModalWrapper({
		data,
		onClose,
	}: ModalContentProps<T>) {
		return <ModalContent data={data} onClose={onClose} />;
	};
}

export const ModalContainer: React.FC = () => {
	const { isOpen, closeModal, ModalComponent, modalData } =
		useModal();

	return (
		<Dialog open={isOpen} onOpenChange={closeModal}>
			<DialogContent>
				{ModalComponent && (
					<ModalComponent
						data={modalData}
						onClose={closeModal}
					/>
				)}
			</DialogContent>
		</Dialog>
	);
};
