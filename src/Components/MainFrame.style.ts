import {styled} from '@stitches/react';
import {motion} from 'framer-motion';

export const MainFrameStyle = styled(motion.div,{
    height: '400px',
    backgroundColor:'#ccc',
    borderRadius: '20px',
    width: '320px',
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'center',
    color: '#000',
    display:'flex',
    flexFlow: 'column nowrap',
    overflow: 'auto',
    justifyContent: 'flex-start',
    gap: '50px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 5px 10px 15px',
    zIndex: 1
})