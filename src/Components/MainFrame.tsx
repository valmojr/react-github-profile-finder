import { MainFrameStyle } from "./MainFrame.style";
import { motion } from 'framer-motion';

export default (props: any) => {
    return(
        <MainFrameStyle data-testid='MainFrame'
            initial={{
                opacity:0,
                marginTop:'-130px',
                scale: 0
            }}
            animate={{
                opacity:1,
                marginTop:'0px',
                scale: 1
            }}
            transition={{
                duration:0.4
            }}
        >
            <motion.div
                initial={{
                    opacity: 0,
                    width: '0px'
                }}
                animate={{
                    opacity: 1,
                    width:'300px'
                }}
                transition={{
                    duration: 1
                }}
            >
                {props.children}
            </motion.div>
        </MainFrameStyle>
    );
};