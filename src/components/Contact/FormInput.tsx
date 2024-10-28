import React from 'react';
import { motion } from 'framer-motion';

interface FormInputProps {
    type?: 'text' | 'email' | 'textarea';
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    placeholder: string;
    required?: boolean;
    rows?: number;
}

const FormInput = ({ type = 'text', name, value, onChange, placeholder, required = true, rows }: FormInputProps) => {
    const baseClassName = "w-full px-4 py-3 bg-neutral-900 border-2 border-neutral-800 rounded-lg text-white placeholder-neutral-400 focus:border-white transition-colors duration-300";

    return (
        <motion.div whileHover={{ y: -2 }} className="relative">
            {type === 'textarea' ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    rows={rows}
                    className={`${baseClassName} resize-none`}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className={baseClassName}
                />
            )}
        </motion.div>
    );
};

export default FormInput;