import {styled} from '@stitches/react';
import {motion} from 'framer-motion';

export const ResultedItemFrame = styled(motion.div,{
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '15px',
    width: '290px',
    height: '100px',
    padding: '10px',
    backgroundColor: '#aaa',
    borderRadius: '10px',
    color: '#333',
    display: 'flex',
    flexFlow: 'row nowrap',
    gap: '20px',
    overflow: 'hidden',
    alignItems: 'center',
    '& img':{
        height: '100px',
        borderRadius: '50%'
    },
})