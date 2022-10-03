import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import Card from '../Card';
import { Select } from '@chakra-ui/react'
import {Stack } from '@chakra-ui/react'
import HomeIcon from '@mui/icons-material/Home';
import Swiperr from '../../Swiperr';
import Link from 'next/link'
import { useEffect, useState } from 'react';

const Content = ({cat_data , index_data})  => {

    const router = useRouter()
    const {slug} = router.query;

    const ent = cat_data.entries;

    const arr = ent.filter( (a) => {
        if(a.Category === slug)
        {
            return a;
        }
    })

    const arr1 = [arr[0] , arr[1] , arr[2] , arr[3]];
    const arr2 = [];
    let j = 0;
    for(let i=4 ; i<arr.length; i++)
    {
        arr2[j] = arr[i];
        j++;
    }

    const handleEvent = (event) => {
        router.push(`/content/${event.target.value}`);
    }

  return (
    <div className="outer1">

        <div className="nav" >
            <Select className="sel1" placeholder='Select option' width={300} ml={500} onChange={(event) => {
                router.push(`/content/${event.target.value}`);
            }}>
                {index_data.categories.map( (a) => (
                        <option key={Math.random()} style={{color: "black"}} value={a.Category}>
                            {a}
                        </option>
                ))}
            </Select>

            <div className="ic2">
            <Link href="../Second">
                <HomeIcon />
            </Link>
            </div>
            
        </div>
    
        <div className="swipe1">
            <Swiperr arra = {arr1}/>
        </div>

        <div className="inner1">
        <div className="sluinner1">
                {arr2.map( (a) =>{
                    return <Card key={Math.random()} api={a.API} desc={a.Description} lin={a.Link} />
                })}
        </div>
        </div>
        
    </div>
  )
}

export default Content;

export async function getServerSideProps()
{
    const res = await axios.get('https://api.publicapis.org/entries');
    const ser = await axios.get('https://api.publicapis.org/categories');
    const cat_data = res.data;
    const index_data = ser.data;
    return {props:{cat_data , index_data}};
};