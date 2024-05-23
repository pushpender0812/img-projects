import React from "react";
import { useFormik,ErrorMessage } from "formik";
import { signupSchema } from "./schemas";



const initialValues = {
    name:"",
    gender:"",
    email:"",
    password:"",
    confirm_password:"",
    subscription:"",
    checkbox:false,
    Additionalinfo:false,
    additionalInfomssg:""
};


const Registration = () => {
  const {values,errors,touched,handleBlur,handleChange,handleSubmit} =  useFormik({
        initialValues:initialValues,
        validationSchema:signupSchema,
        onSubmit:(values,action) => {
          console.log(values);
        action.resetForm()
        alert("Registrtion Successful")
        }
      
        
    })
    console.log(errors);
    
   
  return (
    <>
   
    <div>
        <h2 className="text-white font-bold text-3xl">Welcome!</h2>
    </div>
    
    
     <form onSubmit={handleSubmit} className="h-[900px] w-[700px] ml-[400px] mt-10 bg-cyan-300  ">
      <div className="h-14 mb-5  mt-10">
        <label htmlFor="name">Name :</label>
        <input type="name"
        className="h-14 w-56"
        autoCapitalize="off"
        name="name"
        id="name"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        />
        { errors.name && touched.name ? (<p className="text-red-700 font-semibold">{errors.name}</p>) : null}
      
      </div>
      <div className="h-14 mb-5  mt-2">
        <label htmlFor="name">Gender  :</label>
      <div>
       
        <input type="radio"
        className="ml-3"
        autoCapitalize="off"
        name="gender"
        id="male"
        // placeholder="Name"
        // value={values.gender}
        value="male"
        onChange={handleChange}
        onBlur={handleBlur}
        checked={values.gender === 'male'}
        />
      
        <label htmlFor="" className="mr-5">Male</label>

       
        <input type="radio"
        className=""
        autoCapitalize="off"
        name="gender"
        id="female"
        // placeholder="Name"
        // value={values.name}
        value="female"
        onChange={handleChange}
        onBlur={handleBlur}
        checked={values.gender === 'female'}
        />
       
        <label className="mr-5" htmlFor="">Female</label>
    
       
        <input type="radio"
        className=""
        autoCapitalize="off"
        name="gender"
        id="other"
        // placeholder="Name"
        // value={values.name}
        value="other"
        onChange={handleChange}
        onBlur={handleBlur}
        checked={values.gender === 'other'}
        />
         <label className="mr-5" htmlFor="">Other</label>
        
        </div>
        {errors.gender && touched.gender ? (<p className="text-red-700 font-semibold">{errors.gender}</p>) : null }
      </div>
      <div className="bg-cyan-300 h-14 mb-5 mt-10">
        <label htmlFor="name">Email :</label>
        <input type="email"
        className="h-14 w-56"
        autoCapitalize="off"
        name="email"
        id="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        />
        { errors.email && touched.email ? (<p className="text-red-700 font-semibold">{errors.email}</p>) : null}
      </div>
      <div className="bg-cyan-300 h-14 mb-5 mt-10" >
        <label htmlFor="name">Password :</label>
        <input type="password"
        className="h-14 w-56"
        autoCapitalize="off"
        name="password"
        id="password"
        placeholder="Enter Password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        />
        { errors.password && touched.password ? (<p className="text-red-700 font-semibold">{errors.password}</p>) : null}
      </div>
      <div className="bg-cyan-300 h-14 mb-5 mt-10">
        <label htmlFor="name">Confirm Password :</label>
        <input type="password"
        autoCapitalize="off"
        className="h-14 w-56"
        name="confirm_password"
        id="confirm_password"
        placeholder="Confirm Password"
        value={values.confirm_password}
        onChange={handleChange}
        onBlur={handleBlur}
        />
         { errors.confirm_password && touched.confirm_password ? (<p className="text-red-700 font-semibold">{errors.confirm_password}</p> ): null}
      </div>
      <div className="h-14 mb-5  mt-10">
      <label >Subscriptions :</label>
        <select name="subscription" id="subscription" onChange={handleChange}
        onBlur={handleBlur} value={values.subscription}>
          <option value="free" checked={values.gender === 'free'}>Free</option>
          <option value="pro" checked={values.gender === 'pro'}>pro</option>
          <option value="superpro" checked={values.gender === 'superpro'}>superPro</option>
        </select>
     </div> 
     { errors.subscription && touched.subscription ? (<p className="text-red-700 font-semibold">{errors.subscription}</p> ): null}
      <div>
       
        <input type="checkbox"
        name="checkbox"
        id="checkbox"
        value={values.checkbox}
        onChange={handleChange}
        onBlur={handleBlur}
        />
        <label htmlFor="">I have read all tearms and conditions</label>
      </div>
      {errors.checkbox && touched.checkbox ? (<p className="text-red-700 font-semibold">{errors.checkbox}</p>) : null}
      <div>
        <label htmlFor="">Additionalinfo</label>
        <input type="checkbox"
        name="Additionalinfo"
        id="Additionalinfo"
        value={values.Additionalinfo}
        onChange={handleChange}
        onBlur={handleBlur}
        />
        {errors.Additionalinfo && touched.Additionalinfo ? (<p className="text-red-700 font-semibold">{errors.Additionalinfo}</p>) : null}
      </div>
      {values.Additionalinfo ? (<div>
        <label htmlFor="additionalInfomssg">Enter Additional Information :</label>
        <textarea name="additionalInfomssg" id="additionalInfomssg"
        onChange={handleChange} onBlur={handleBlur} value={values.additionalInfomssg}></textarea> 
        {errors.additionalInfomssg && touched.additionalInfomssg ? (<p className="text-red-700 font-semibold">{errors.additionalInfomssg}</p>) : null}
      
      </div>  ) : null}
     
      <div>
        <button type="submit" className="mt-10 h-[40px] w-[100px] bg-black text-yellow-50 rounded-2xl">Registration</button>
      
      </div>
      
    </form>
  
    </>
  );
};

export default Registration;
