import React from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '../../components/StyledComponents/Input'
import { Button } from '../../components/StyledComponents/Button'

import './EditProfile.css'

export default function EditProfile () {
  const { register, handleSubmit, formState: { errors } } = useForm()

  console.log('errors', errors)
  const sendQueryToApi = (data) => {
    console.log(data)
  }

  return (
    <div className='EditProfile'>
      <div className='Grid'>
        <div className='EditProfile__panel'>
          <h1>Edit profile</h1>
          <div className='Form'>

            <form onSubmit={handleSubmit(sendQueryToApi)}>

              <div className='Form__control'>
                <Input
                  {...register('fullName', { required: 'This field is required' })}
                  placeholder='Full name'
                />
              </div>
              <label className='ErrorMessage'>{errors?.fullName?.message}</label>

              <div className='Form__control'>
                <Input
                  {...register('phoneNumber', { required: 'This field is required' })}
                  placeholder='Phone number'
                />
              </div>
              <label className='ErrorMessage'>{errors?.phoneNumber?.message}</label>

              <div className='Form__control'>
                <select
                  {...register('gender')}
                  className='Form__genre'
                >
                  <option value='' selected />
                  <option value='female'>Female</option>
                  <option value='male'>Male</option>
                </select>
              </div>
              <label className='ErrorMessage'>{errors?.gender?.message}</label>

              <div className='Form__control'>
                <Button>Enviar</Button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </div>
  )
}
