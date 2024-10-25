import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
/*import './assets/styles/styles.css';*/
export const LoadingScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
        >
            <motion.div
                animate={{
                    rotate: 360,
                    transition: { duration: 2, repeat: Infinity, ease: "linear" }
                }}
            >
                <Code2 size={48} className="text-white" />
            </motion.div>
        </motion.div>
    );
};