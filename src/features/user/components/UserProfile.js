import { useSelector, useDispatch } from 'react-redux';
import {
  selectUserInfo,
  updateUserAsync,
} from '../userSlice';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function UserProfile() {
  const user = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const [selectedEditIndex, setSelectedEditIndex] = useState(-1)
  const [showAddAddressForm, setShowAddAddressForm] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    // formState: { errors },
  } = useForm()

  const handleEdit = (addressUpdate, index) => {
    const newUser = { ...user, addresses: [...user.addresses] }
    newUser.addresses.splice(index, 1, addressUpdate)
    dispatch(updateUserAsync(newUser))
    setSelectedEditIndex(-1)
  }
  const handleRemove = (index) => {
    const newUser = { ...user, addresses: [...user.addresses] }
    newUser.addresses.splice(index, 1)
    dispatch(updateUserAsync(newUser))
  }
  const handleEditForm = (index) => {
    setSelectedEditIndex(index)
    const address = user.addresses[index]
    setValue('name', address.name)
    setValue('email', address.email)
    setValue('phone', address.phone)
    setValue('street', address.street)
    setValue('city', address.city)
    setValue('state', address.state)
    setValue('zipCode', address.zipCode)
  }

  const handleAdd = (address) => {
    const newUser = { ...user, addresses: [...user.addresses, address] }
    dispatch(updateUserAsync(newUser))
    setShowAddAddressForm(false)
  }

  return (
    <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl text-left font-bold my-5 pt-3 tracking-tight text-gray-900">
        Name: {user.name ? user.name : " New User "}
      </h1>
      <h3 className="text-xl text-left font-bold my-5 pt-3 tracking-tight text-red-700">
        Email: {user.email}
      </h3>

      <div className="border-t text-left border-gray-200 px-4 py-6 sm:px-6">
        <button
          onClick={() => { setShowAddAddressForm(true) }}
          type="submit"
          className="rounded-md mb-5 bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Add New Address
        </button>
        {showAddAddressForm ? (
          <form noValidate className='bg-white px-5 py-8 my-12'
            onSubmit={handleSubmit((data) => {
              handleAdd(data)
              reset()
            })}
          >
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-2xl text-left font-semibold leading-7 text-gray-900">Personal Information</h2>
                <p className="mt-1 text-sm text-left leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                      Full Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        {...register('name', { required: 'Name is required' })}
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        {...register('email', { required: 'Email is required' })}
                        type="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                      Phone
                    </label>
                    <div className="mt-2">
                      <input
                        id="phone"
                        {...register('phone', { required: 'Phone Number is required' })}
                        type="tel"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label htmlFor="street" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                      Street address
                    </label>
                    <div className="mt-2">
                      <input
                        id="street"
                        {...register('street', { required: 'Street is required' })}
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        id="city"
                        {...register('city', { required: 'City is required' })}
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                      State / Province
                    </label>
                    <div className="mt-2">
                      <input
                        id="state"
                        {...register('state', { required: 'State is required' })}
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="zipCode" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                      ZIP / Postal code
                    </label>
                    <div className="mt-2">
                      <input
                        id="zipCode"
                        {...register('zipCode', { required: 'zipCode is required' })}
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button onClick={() => setShowAddAddressForm(false)} type="button" className="text-sm font-semibold leading-6 text-gray-900">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add Address
                </button>
              </div>
            </div>
          </form>
        ) : null}
        <p className="mt-0.5 text-sm text-gray-500 text-left">
          Your Addresses:
        </p>
        {user.addresses.map((address, index) => (
          <>
            {selectedEditIndex === index ? (
              <form noValidate className='bg-white px-5 py-8 my-12'
                onSubmit={handleSubmit((data) => {
                  // dispatch(updateUserAsync({ ...user, addresses: [...user.addresses, data] }))
                  handleEdit(data, index)
                  reset()
                })}
              >
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-2xl text-left font-semibold leading-7 text-gray-900">Personal Information</h2>
                    <p className="mt-1 text-sm text-left leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-4">
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                          Full Name
                        </label>
                        <div className="mt-2">
                          <input
                            id="name"
                            {...register('name', { required: 'Name is required' })}
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            {...register('email', { required: 'Email is required' })}
                            type="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                          Phone
                        </label>
                        <div className="mt-2">
                          <input
                            id="phone"
                            {...register('phone', { required: 'Phone Number is required' })}
                            type="tel"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="col-span-full">
                        <label htmlFor="street" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                          Street address
                        </label>
                        <div className="mt-2">
                          <input
                            id="street"
                            {...register('street', { required: 'Street is required' })}
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2 sm:col-start-1">
                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                          City
                        </label>
                        <div className="mt-2">
                          <input
                            id="city"
                            {...register('city', { required: 'City is required' })}
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                          State / Province
                        </label>
                        <div className="mt-2">
                          <input
                            id="state"
                            {...register('state', { required: 'State is required' })}
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="zipCode" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                          ZIP / Postal code
                        </label>
                        <div className="mt-2">
                          <input
                            id="zipCode"
                            {...register('zipCode', { required: 'zipCode is required' })}
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button onClick={() => setSelectedEditIndex(-1)} type="button" className="text-sm font-semibold leading-6 text-gray-900">
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Edit Address
                    </button>
                  </div>
                </div>
              </form>
            ) : null}
            <div className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200">
              <div className="flex min-w-0 gap-x-4 ">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold text-left leading-6 text-gray-900">
                    {address.name}
                  </p>
                  <p className="mt-1 truncate text-left text-xs leading-5 text-gray-500">
                    {address.street}
                  </p>
                  <p className="text-sm text-left leading-6 text-gray-500">
                    {address.zipCode}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  Phone: {address.phone}
                </p>
                <p className="text-sm leading-6 text-gray-500">
                  {address.city}
                </p>
                <p className="text-sm leading-6 text-gray-800">
                  {address.state}
                </p>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <button type="button" onClick={() => handleEditForm(index)} className="font-medium text-indigo-600 hover:text-indigo-500">
                  Edit
                </button>
                <button type="button" onClick={() => handleRemove(index)} className="font-medium text-indigo-600 hover:text-indigo-500">
                  Remove
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
