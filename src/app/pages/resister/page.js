"use client";

import React, { useState } from 'react';
import Layout from '@/app/components/layout/layout'
import postData from '@/app/components/api/postApi';
import { ProgressSpinner } from 'primereact/progressspinner';



export default function Resister() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [isLoading,setIsLoading] = useState(false);
  const [message,setMessage] = useState("");


   const firstNameChange = (e) =>{
    setFirstName(e.target.value);
   }
   const lastNameChange = (e) =>{
    setLastName(e.target.value);
   }
   const emailChange = (e) =>{
    setEmail(e.target.value);
   }
   const passwordChange = (e) =>{
    setPassword(e.target.value);
   }

   const subMitForm =async(e)=>{
    e.preventDefault();
   const data = JSON.stringify(({
    "firstName":firstName,
    "lastName":lastName,
    "email":email,
    "password":password
   }))
   setIsLoading(true)

   const {resp,loading,errorMessage} = await postData("http://localhost:5000/api/user",data);
   console.log("response",resp);
   if(resp.responseStatus === "success"){
    setIsLoading(loading)
    setMessage(resp.responseMsg)
   }
   else if(resp.responseStatus === "error"){
    setIsLoading(loading)
    setMessage(resp.responseMsg)
   }
   else if(errorMessage){
    setIsLoading(loading)
   }

   }

  return (
    <Layout>
    {
      isLoading ?
    <div className="spinnerClass">
    <ProgressSpinner style={{width: '20%', height: '20%'}} />
     </div>
     :null
    }

     <div>
      <div class="grid  place-items-center">
  <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
    <h1 class="text-xl font-semibold">Hello there ?, <span class="font-normal">please fill in your information to continue</span></h1>
    <form class="mt-6">
    <h1 className='text-[black] text-center px-2 py-2'>{message}</h1>
      <div class="flex justify-between gap-3">
        <span class="w-1/2">
          <label for="firstname" class="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
          <input id="firstname" onChange={firstNameChange} value={firstName} type="text" name="firstname" placeholder="John" autocomplete="given-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        </span>
        <span class="w-1/2">
          <label for="lastname" class="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
        <input id="lastname" onChange={lastNameChange} value={lastName} type="text" name="lastname" placeholder="Doe" autocomplete="family-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        </span>
      </div>


      <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
      <input id="email" value={email} onChange={emailChange} type="email" name="email" placeholder="john.doe@company.com" autocomplete="email" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
      <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
      <input id="password" onChange={passwordChange} value={password} type="password" name="password" placeholder="********" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
      <label for="password-confirm" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Confirm password</label>
      <input id="password-confirm" type="password" name="password-confirm" placeholder="********" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
      <button type="submit" onClick={subMitForm} class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
        Sign up
      </button>
      <p class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black"><a href="/pages/login">Already registered?</a></p>
    </form>
  </div>
</div>
    </div>
    </Layout>

  )
}
