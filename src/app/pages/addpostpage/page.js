"use client";

import React, { useState } from 'react'
import ReactECharts from 'echarts-for-react';
import Layout from '@/app/components/layout/layout';
import Sidebar from '@/app/components/layout/left';
import postData from '@/app/components/api/postApi';
import axios from 'axios'
import { ProgressSpinner } from 'primereact/progressspinner';
import { Dropdown } from 'primereact/dropdown';
const AddPostPage = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const categoryList = [
      { name: 'Tech Conference', code: 'NY' },
      { name: 'Music Festival', code: 'RM' },
      { name: 'Wedding Festival', code: 'LDN' },
      { name: 'BirthDay Celebration', code: 'IST' },
  ];
      const [selectedImage, setSelectedImage] = useState(null);
      const [postImg, setPostImg] = useState(null);

      const [title, setTitle] = useState("");
      const [content, setContent] = useState("");
      const [message, setPostMessage] = useState("");
  const [isLoading,setIsLoading] = useState(false);




      const handleImageChange = (event) => {
        const image = event.target.files[0];
        console.log("image",image);
        setSelectedImage(URL.createObjectURL(image));
        setPostImg(event.target.files[0])

      };

      console.log("postImg",postImg);

      const handleRemoveImage = () => {
        setSelectedImage(null);
      };

      console.log("postImg",postImg);


      const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true)
        const formDataToSend = new FormData();
        formDataToSend.append("title", title);
        formDataToSend.append("content", content);
        formDataToSend.append("category", selectedCategory.name);
        formDataToSend.append("postImg", postImg);


        try {
          const response = await fetch("http://localhost:5000/api/addpost", {
            method: "POST",
            body: formDataToSend,
          });

          const data = await response.json();
      if(data.responseStatus === "success"){
       setIsLoading(false)
      setPostMessage(data.responseMsg)
      }
        } catch (error) {
          alert(error.message);
          console.log(error);
      setPostMessage("Post Not Added Successfully")

        }
      };
  return (
    <div>
    <Layout>
    {
      isLoading ?
    <div className="spinnerClass">
    <ProgressSpinner style={{width: '20%', height: '20%'}} />
     </div>
     :null
    }
    <div className="bg-gray-100 h-screen flex">
    <Sidebar />

    <div class="container mx-auto p-8">
        <h1 class="text-2xl font-semibold mb-4">Add Post</h1>
        <p className='text-center'>{message}</p>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method='post'>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                    Title
                </label>
                <input value={title} onChange={(e)=>setTitle(e.target.value)} class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Enter title" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="content">
                    Content
                </label>
                <textarea  value={content} onChange={(e)=>setContent(e.target.value)}  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="content" placeholder="Enter content"></textarea>
            </div>
            <div className="card flex justify-content-center">
            <Dropdown value={selectedCategory} onChange={(e) => setSelectedCategory(e.value)} options={categoryList} optionLabel="name"
                editable placeholder="Select a City" className="w-full md:w-14rem" />
        </div>
            <div className="mb-4 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Upload Image
          </label>
          <div className="flex items-center justify-center bg-gray-100 border-dashed border-2 border-gray-400 rounded-md py-4">
            <label htmlFor="image" className="cursor-pointer">
              <span className="text-blue-500 hover:text-blue-700">Choose a file</span>
              <input
                type="file"
                id="image"
                name="postImg"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />

            </label>
          </div>
          <div className=''>
          {selectedImage && (
            <div className="mt-2">
            <button
                className="text-red-500 hover:text-red-700"
                type="button"
                onClick={handleRemoveImage}
              >
                Remove
              </button>
              <img src={selectedImage} alt="Image Preview" className="mb-2 w-[100%]" />

            </div>
          )}
          </div>
        </div>
            <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
                    Add Post
                </button>
            </div>
        </form>
    </div>

    </div>
    </Layout>
    </div>
  )
}

export default AddPostPage
