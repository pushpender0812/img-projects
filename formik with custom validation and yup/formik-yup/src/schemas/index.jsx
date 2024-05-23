import * as Yup from 'yup'

export const signupSchema = Yup.object({
    name:Yup.string().min(2).max(25).required('Please Enter your name'),
    gender:Yup.string().required(),
    email:Yup.string().email().required('Please enter your email'),
    password:Yup.string().min(6).required("Please enter your password"),
    subscription:Yup.string().required('Select Subscription Type'), 
    confirm_password:Yup.string().min(6).required('Please enter confirm password').oneOf([Yup.ref("password"),null],"Password must match"),
    checkbox:Yup.boolean().oneOf([true],'please tick checkbox').required('please tick checkbox'),
    Additionalinfo:Yup.boolean(),
    // additionalInfomssg:Yup.string().when("Additionalinfo",{
    //     is:true,
    //     then:Yup.string().required("This is a required field"),
    // })
    additionalInfomssg:Yup.string()

})