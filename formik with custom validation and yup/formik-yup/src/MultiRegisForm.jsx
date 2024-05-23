import React from 'react'
import {Formik,Form,Field,ErrorMessage,FieldArray} from 'formik'
import * as Yup from 'yup'


const validationSchema = Yup.object().shape({
    employees:Yup.array().of(
        Yup.object().shape({
            firstname:Yup.string().required('This field is required'),
            lastname:Yup.string().required('This field is required'),
            email:Yup.string().email('Invalid Email').required('This field is required'),
        })
    )
})

const MultiRegisForm = () => {
  return (
    <>
 <Formik initialValues={{
    employees:[{firstname:"",lastname:"",email:""}],
 }}
 validationSchema={validationSchema}
   onSubmit={(values) => {
     console.log(values);
   }}
 >
    {
        (Formik) => (
            <Form>
                <div>
                    <h1>Add Multiple Employees</h1>
                    <FieldArray name='employees' render={
                      (arrayHelpers) => {
                      return <div>
                      {Formik.values.employees.map((employee,index) => (
                        <>
                        <div key={index}>
                            <div className='text-end'>
                        <button type='button' className='text-2xl bg-red-700 mr-[400px] mt-15' onClick={() => arrayHelpers.remove(index)}>X</button>
                            </div>
                            <div className='card p-5'>
                                <div>{`Employee ${index +1}`}</div>
                                <div>
                                    <div>
                                        <label htmlFor={`employees.${index}.firstname`}>FirstName</label>
                                   <Field 
                                   type="text"
                                   name={`employees.${index}.firstname`}
                                   id={`employees.${index}.firstname`}
                                   />
                                   <ErrorMessage className='text-red-400' name={`employees.${index}.firstname`}/>
                                    </div>
                                </div>
                                <br />
                              

                                <div>
                                    <div>
                                        <label htmlFor={`employees.${index}.lastname`}>LastName</label>
                                   <Field 
                                   type="text"
                                   name={`employees.${index}.lastname`}
                                   id={`employees.${index}.lastname`}
                                   />
                                      <ErrorMessage name={`employees.${index}.lastname`}/>
                                    </div>
                                </div>
                                <br />
                              

                                <div>
                                    <div>
                                        <label htmlFor={`employees.${index}.email`}>E-mail</label>
                                   <Field 
                                   type="text"
                                   name={`employees.${index}.email`}
                                   id={`employees.${index}.email`}
                                   />
                                      <ErrorMessage name={`employees.${index}.email`}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </>
                      ))}
                      <div>
                        <button type='button' onClick={() => arrayHelpers.insert(Formik.values.employees.length + 1,{firstname:"",lastname:"",email:""})}> + Add</button>
                      </div>
                      </div>
                      }
                    }
                    />
                </div>
                <br />
                <br />
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </Form>
        )
    }
    
    </Formik>      
    </>
  )
}

export default MultiRegisForm
