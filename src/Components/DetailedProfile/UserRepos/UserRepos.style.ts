import { styled } from '@stitches/react';
import { motion } from 'framer-motion';

export const UserRepoFrame = styled(motion.div, {
    backgroundColor: '#aaa',
    padding: '5px',
    width : '290px',
    height:'fit-content',
    borderRadius: '10px',
    borderLeft: 'auto',
    borderRight: 'auto',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px inset',
    '& h4': {
        marginLeft: '0px',
        textAlign: 'left',
        marginTop: '0px',
        marginBottom: '-10px',
        fontSize: '14px'
    }
})

export const RepoItemFrame = styled(motion.div, {
    backgroundColor: '#888',
    padding: '5px',
    width : '260px',
    height: 'fit-content',
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 10px',
    '& h3': {
        marginTop: '5px',
        fontSize: '24px'
    },
    '& h4': {
        marginLeft: 'auto',
        textAlign: 'center',
        marginBottom: '0px',
        fontSize: '14px',
        marginTop: '-15px'
    },
    '& h5': {
        textAlign: 'center',
        marginTop: '-5px',
        fontSize: '18px'
    },
    '& a:':{
        color:'#000'
    }
})