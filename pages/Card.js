import React, { useState } from 'react'
import randomColor from 'randomcolor'
import {
  Button
} from '@chakra-ui/react';

function Card(props) {

  var color = randomColor();

  return (
    <div className="inner2">

        <div className="color1" style={{backgroundColor:color,}}></div>

        <div className="cardinner3">
          <h1>{props.api}</h1>
          <p>{props.desc}</p>
          <a href={props.lin}>
          <Button colorScheme="green">
            Link for API
          </Button>
          </a>
        </div>
        
    </div>
  )
}

export default Card