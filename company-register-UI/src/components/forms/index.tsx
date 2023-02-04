import React from 'react'
import { AdminConsumer } from '../../config/context';
import CompanyForm from './companyForm';
import InventoryForm from './inventoryForm';
import UserForm from './userForm';

const Forms = () => {
  const { modal } = AdminConsumer();


  const RenderForm = (): any => {
    switch (modal?.from) {
      case 'company':
        return <CompanyForm />

      case 'inventory':
        return <InventoryForm />

      case 'user':
        return <UserForm />
    }
  }

  return (
    <RenderForm />
  )
}

export default Forms
