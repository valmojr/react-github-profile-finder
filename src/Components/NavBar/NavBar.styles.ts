import { styled } from '@stitches/react';
import { motion } from 'framer-motion';

export const NavBarFrameStyled = styled(motion.div,{
    width: 'fit-content',
    marginLeft: 'auto',
    marginRight: 'auto',
})


export const NavBarButtonStyled = styled(motion.button,{
    width: '100px',
    backgroundColor: '#F53',
    borderRadius: '10px 10px 0px 0px',
    border: 'none',
    color: '#FFF',
    fontWeight: 'bold',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    zIndex: 0
})