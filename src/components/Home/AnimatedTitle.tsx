import { motion } from 'framer-motion';
/*import './assets/styles/styles.css';*/
interface AnimatedTitleProps {
    text: string;
    delay: number;
}

export const AnimatedTitle = ({ text, delay }: AnimatedTitleProps) => {
    return (
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
            className="text-4xl md:text-6xl font-bold mb-4 text-stroke"
        >
            {text}
        </motion.h1>
    );
};