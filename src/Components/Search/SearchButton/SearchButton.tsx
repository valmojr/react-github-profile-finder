import { motion } from "framer-motion"

export default () => {
    return <motion.button
                type="submit"
                data-testid='searchButton'
                initial={{
                    marginTop: '30px',
                    backgroundColor: '#F53',
                    height: '60px',
                    width: '180px',
                    fontSize: '28px',
                    color: '#FFF',
                    fontWeight: 'bold',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    scale: 1
                }}
                whileHover={{
                    scale: 1.1
                }}
                whileTap={{
                    scale: 0.95
                }}
                >
                    Search
            </motion.button>
}