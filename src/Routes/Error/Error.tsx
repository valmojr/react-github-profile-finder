import {motion} from 'framer-motion';

export default () => {
    return (
        <motion.h1
            data-testid='badroutehandler'
            style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                height:'340px'
            }}
            initial={{
                scale: 0.3,
                opacity:0
            }}
            animate={{
                scale: 1,
                opacity:1
            }}
            transition={{
                delay: 0.3,
                duration: 0.4
            }}
        >
            Not found
        </motion.h1>
    );
}