import React from 'react'
import {
  Button
} from '@chakra-ui/react';

const Comps = (props) => {
  return (
    <div className="compsouter1">
        
        <div className="compsinner1">
            <p>{props.te.API}</p>
                
        </div>

        <div className="compsinner2">
            <p>{props.te.Description}</p>
            <a href={props.te.Link}> 
              
            <Button variant='solid' colorScheme='teal' size='lg'>
                Link for API
            </Button>

            </a>
        </div>

    </div>
  )
}

export default Comps;