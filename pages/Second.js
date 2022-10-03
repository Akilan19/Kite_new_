import React from 'react'
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Input,
  } from '@chakra-ui/react';
import Link from 'next/link'
import axios from 'axios';
import { useEffect, useState } from 'react';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import BoltIcon from '@mui/icons-material/Bolt';

function Second({index_data}) {
    const[listOfTopic,setListOfTopic] = useState([]);
    const[searchWord , setSearchWord] = useState("");

    console.log(searchWord);
    useEffect(() => {
        setListOfTopic(index_data.categories);
      },[]);

        const filterTopics = listOfTopic.filter((c) => {
            return c.toLowerCase().includes(searchWord.toLocaleLowerCase());
          });
    

  return (
    <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://www.wallpaperup.com/uploads/wallpapers/2014/02/07/249138/0f71d490fc10abdd775679ae3c29c35f.jpg)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>

        <div className="seconddiv"><div className="seconddiv2">MANY<BoltIcon />API </div><p>Documentation and Test Consoles for Over 1400 Public APIs</p></div>

<div className="inp">
        <input placeholder='Enter the topic to search' onChange={(event) => {
          setSearchWord(event.target.value);
        }}/>
        </div>

        <div className="indexdiv">

            {filterTopics.map( (a) => {
                return (
                    <Link key={Math.random()} href={`/content/${encodeURIComponent(a)}`}>
                        <Button colorScheme="orange" className="but1">{a}</Button>
                    </Link>
            );
            }
            )}
            
        </div>

        <div className="down">
            <div>Scroll Down To View More Topics</div>
            <div className="ic">
                <KeyboardDoubleArrowDownOutlinedIcon />
            </div>
        </div>
    </Flex>
  )
}

export default Second;

export async function getServerSideProps()
{
    const res = await axios.get('https://api.publicapis.org/categories');
    const index_data = res.data;
    return {props:{index_data}};
};