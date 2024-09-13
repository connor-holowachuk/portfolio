'use client';
import React, {
	createContext,
	useState,
	useContext,
	ReactNode,
} from 'react';
import { Cpu, MemoryStick, CodeXml, Frame } from 'lucide-react';
import { TechnologiesOptions } from '@/lib/constants';

type TechnologiesContextType = {
	selectedTab: string;
	setSelectedTab: (tab: string) => void;
};

const TechnologiesContext = createContext<
	TechnologiesContextType | undefined
>(undefined);

export const TechnologiesProvider: React.FC<{
	children: ReactNode;
}> = ({ children }) => {
	const [selectedTab, setSelectedTab] = useState(
		TechnologiesOptions[0].title
	);

	return (
		<TechnologiesContext.Provider
			value={{ selectedTab, setSelectedTab }}>
			{children}
		</TechnologiesContext.Provider>
	);
};

export const useTechnologies = () => {
	const context = useContext(TechnologiesContext);
	if (context === undefined) {
		throw new Error(
			'useTechnologies must be used within a TechnologiesProvider'
		);
	}
	return context;
};
