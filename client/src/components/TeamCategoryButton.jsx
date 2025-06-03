import React from 'react';

const TeamCategoryButton = ({ category, isActive, onClick }) => {
    const buttonClasses = `
        px-4 py-2 text-sm font-medium capitalize md:py-3 rounded-xl md:px-12
        ${isActive
            ? 'bg-slate-800 text-amber-300'
            : 'text-amber-300 dark:text-amber-400 transition-colors duration-300 focus:outline-none hover:bg-blue-600 hover:text-white'
        }
    `;

    return (
        <button className={buttonClasses} onClick={() => onClick(category)}>
            {category}
        </button>
    );
};

export default TeamCategoryButton;