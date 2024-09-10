'use client';

import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
} from 'react';

export type ModalContentProps<T = any> = {
	data: T;
	onClose: () => void;
};

type ModalContent<T = any> = React.ComponentType<
	ModalContentProps<T>
>;

type ModalContextType = {
	openModal: <T>(ModalComponent: ModalContent<T>, data: T) => void;
	closeModal: () => void;
	isOpen: boolean;
	ModalComponent: ModalContent | null;
	modalData: any;
};

const ModalContext = createContext<ModalContextType | undefined>(
	undefined
);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [ModalComponent, setModalComponent] =
		useState<ModalContent | null>(null);
	const [modalData, setModalData] = useState<any>(null);

	const openModal = <T,>(
		ModalComponent: ModalContent<T>,
		data: T
	) => {
		setModalComponent(() => ModalComponent);
		setModalData(data);
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
		setModalComponent(null);
		setModalData(null);
	};

	return (
		<ModalContext.Provider
			value={{
				openModal,
				closeModal,
				isOpen,
				ModalComponent,
				modalData,
			}}>
			{children}
		</ModalContext.Provider>
	);
};

export const useModal = () => {
	const context = useContext(ModalContext);
	if (context === undefined) {
		throw new Error(
			'useModal must be used within a ModalProvider'
		);
	}
	return context;
};
