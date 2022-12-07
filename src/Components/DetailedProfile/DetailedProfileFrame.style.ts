import { motion } from 'framer-motion';
import { styled } from '@stitches/react';

export const DetailedProfileStyledFrame = styled(motion.div,{
    height: 'fit-content',
    width: '305px',
    backgroundColor: '#bbb',
    margin: '-15px',
    padding: '15px',
    borderRadius: '15px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px inset',
    '& h2': {
        fontWeight: 'bolder',
        marginTop: '5px',
        fontSize: '32px'
    },
    '.userbio': {
        fontWeight: 'bold',
        fontSize: '18px',
        marginTop: '-20px'
    },
    '.userlocation':{
        fontSize: '16px',
        marginTop: '-15px'
    }
})