"use client"

import React from 'react';
import { motion } from 'motion/react';

type ButtonProps = {
    children: React.ReactNode,
    className?: string,
    onClick?: any,
    type?: any,
    props?: any,
    disable?: boolean,
    classType?: string,
}

const index = ({ classType, children, className, onClick, type, disable, ...props }: ButtonProps) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type={type}
            onClick={onClick}
            className={`${classType === "primary" && "border bg-white text-primary border-white"} 
            ${classType === "secondary" && "bg-primary text-white"} 
            rounded-[8px] text-[13px] lg:text-[17px] font-medium hover:bg-opacity-90 py-[14px] px-[32px]
            
            ${className}`
            }
            {...props}
            disabled={disable}
        >
            {children}
        </motion.button>
    )
}

export default index