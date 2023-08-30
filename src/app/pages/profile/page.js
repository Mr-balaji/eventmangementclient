"use client";

import React from 'react'
import ReactECharts from 'echarts-for-react';
import Layout from '@/app/components/layout/layout';
import Sidebar from '@/app/components/layout/left';

const Profile = () => {

   const  option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      };

      const tileData  = [
        {id:1,count:"38.k",title:"Revenue This Month",bg:"red"},
        {id:2,count:"118.k",title:"Project Income",bg:""},
        {id:3,count:"56.3k",title:"Quated This Month ",bg:""},
        {id:4,count:"2214",title:"OutStanding Invoces ",bg:""}

      ]

      const BarChartOption = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        grid:{
         bottom:40
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      };
  return (
    <div>
    <Layout>
    <div className="bg-gray-100 h-screen flex">
    <Sidebar />

    <div className="w-3/4 p-8 ">
    <div>
    <div className='grid grid-cols-4 gap-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
    {
      tileData.map((elm)=>{
        return(
          <>
          <div class={`border px-4 py-4 bg-red-100 `}>
       <h1 className='text-[black] font-semibold text-[30px]'>{elm.count}</h1>
       <p>{elm.title}</p>
      </div>
          </>
        )
      })
    }
      <div>
      </div>
    </div>
    <div className='grid grid-cols-2 gap-3'>
    <div className='border rounded-3xl bg-[#ffff] '>
    <p className='px-3 py-3'>Total Revenue</p>
    <ReactECharts option={option} />
    </div>
    <div className='border rounded-3xl bg-[#ffff] '>
    <ReactECharts option={BarChartOption} />
    </div>
    </div>
    </div>
    </div>

    </div>
    </Layout>
    </div>
  )
}

export default Profile
