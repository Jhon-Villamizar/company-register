import { createContext, useContext } from 'react';
import { MyContextType } from './typesState';

export const AdminContext = createContext<MyContextType>({} as MyContextType);
export const AdminProvider = AdminContext.Provider;
export const AdminConsumer = () => useContext(AdminContext);