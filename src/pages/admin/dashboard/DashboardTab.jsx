import React, { useContext } from 'react'
import myContext from '../../../context/data/myContext'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { FaUser, FaCartPlus } from 'react-icons/fa';
import { AiFillShopping, AiFillPlusCircle, AiFillDelete } from 'react-icons/ai';

const DashboardTab = () => {
    const {mode}= useContext(myContext)
  return (
    <div className='container mx-auto'>
        <div className='tab container mx-auto'>

            <Tabs defaultIndex={0} className=" ">
                <TabList className="md:flex md:space-x-8 bg-  grid grid-cols-2 text-center gap-4   md:justify-center mb-10 ">
                <TabChild icon={<MdOutlineProductionQuantityLimits />} name="Products" borderPrimary="border-purple-500" bgSecondary="shadow-purple-700" textPrimary="text-purple-500">

                </TabChild>
                <TabChild icon={<AiFillShopping />} name="Order" borderPrimary="border-pink-500" bgSecondary="shadow-pink-700" textPrimary="text-pink-500"></TabChild>
                <TabChild icon={ <FaUser />} name="Users" borderPrimary="border-emerald-500" bgSecondary="shadow-emerald-700" textPrimary="text-emerald-500"></TabChild>


                </TabList>

            </Tabs>

        </div>

    </div>
  )
}

const TabChild =(props)=>{
    const {name,icon,borderPrimary,bgSecondary,textPrimary} = props
    return(
        <Tab>
                                <button type="button" className={`font-medium border-b-2 hover:${bgSecondary} ${borderPrimary} ${textPrimary} rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]  px-5 py-1.5 text-center bg-[#605d5d12] `}>
                                    <div className="flex gap-2 items-center">
                                        {icon}{name}</div> </button>
                            </Tab>
    )
}

export default DashboardTab