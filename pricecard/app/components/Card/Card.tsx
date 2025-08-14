import React from 'react'
import { motion } from "motion/react"

export interface PricingPlan {
    title: string;
    price: string;
    period?: string;
    description: string;
    buttonText: string;
    features: string[];
    highlighted?: boolean;
}

export const pricingPlans: PricingPlan[] = [
    {
        title: "Starter",
        price: "$0",
        period: "/month",
        description: "Perfect For Small Teams",
        buttonText: "Start Hiring",
        features: [
            "3 Projects",
            "AI Applicant Screening",
            "AI Recruiter"
        ]
    },
    {
        title: "Professional",
        price: "99",
        period: "/month",
        description: "Perfect For Growing Teams",
        buttonText: "Start Hiring",
        features: [
            "Unlimited Projects",
            "AI Applicant Screening",
            "AI Recruiter",
            "Risk-Free Guarantee"
        ],
    },
    {
        title: "Enterprise",
        price: "Custom",
        description: "For Large Organizations",
        buttonText: "Contact Us",
        features: [
            "Unlimited Projects",
            "AI Applicant Screening",
            "Custom Skill Assessments",
            "Custom AI Recruiter"
        ]
    }
];



const Card = () => {
    return (
        <div className='text-neutral-900 font-sans pt-5 bg-neurtral-100 '>
            {/* //card container */}
            <div className='max-w-5xl mx-auto px-5 py-2 flex flex-col lg:flex-row gap-5'>
                {/* //card */}
                {pricingPlans.map((plan, index) => (
                    <motion.div
                        key={index}
                        className={`w-72 h-[430px] bg-gradient-to-b from-neutral-300 to-white rounded-2xl shadow-2xl`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.2 }}
                    >
                        <div className='p-3 w-full h-64 bg-white rounded-2xl shadow-lg'>

                            <motion.div
                                className={`w-full h-36 rounded-2xl flex flex-col items-start px-4 py-2 justify-between ${plan.title === 'Professional' ? 'bg-blue-100' : 'bg-neutral-200'}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                            >
                                <div className='bg-white text-sm font-semibold px-6 py-0.5 rounded-full'>
                                    {plan.title}
                                </div>
                                <div className='font-inter text-2xl font-bold tracking-tighter'>
                                    <span className='text-3xl font-bold'>{plan.price}</span>
                                    {plan.period}
                                </div>
                            </motion.div>

                            <motion.div
                                className='text-left pl-1 pt-2 font-sans font-medium tracking-tighter'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                            >
                                <div>
                                    {plan.description}
                                </div>
                                <motion.button
                                    className='text-white font-normal py-3 mt-3 w-full shadow-xl rounded-full bg-neutral-800 text-sm'
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {plan.buttonText}
                                </motion.button>
                                <div className='pl-1 pt-8 flex flex-col gap-2'>
                                    {plan.features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            className='flex items-center gap-2'
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                        >
                                            <span>✓</span>
                                            <span>{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Card
