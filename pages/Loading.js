import React from "react";
import styles from "./Loading.module.css";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  background,
} from '@chakra-ui/react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Loading(props) {
  return (
    <div className={props.loading ? styles.body_loading : styles.none}>
    
    <div className={styles.outer4}></div>

<div className={styles.loaded2}>
<div className={styles.load2}>LOADING</div>
      <div
        className={styles.lds_ellipsis}
      >
        <div><FiberManualRecordIcon/></div>
        <div><FiberManualRecordIcon/></div>
        <div><FiberManualRecordIcon/></div>
        <div><FiberManualRecordIcon/></div>
      </div>
</div>
    
    </div>
  );
}

export default Loading;