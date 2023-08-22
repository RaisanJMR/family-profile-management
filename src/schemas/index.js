import * as yup from 'yup'

// regex for any indian phone number format
// eslint-disable-next-line
const phoneNumberRules = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/gm

// User schema
export const userSchema = yup.object().shape({
  name: yup.string().required('name is required'),
  email: yup
    .string()
    .email('please enter valid email')
    .required('email required'),
  phone: yup
    .string()
    .matches(phoneNumberRules, { message: 'please add a valid phone number' })
    .required('phone number required'),
})

// Family schema
export const familySchema = yup.object().shape({
  name: yup.string().required('name is required'),
  age: yup.number().positive().integer().required('age required'),
  phone: yup
    .string()
    .matches(phoneNumberRules, { message: 'please add a valid phone number' }),
})
