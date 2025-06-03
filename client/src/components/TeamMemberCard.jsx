import React from 'react'
const TeamMemberCard = ({ member }) => {
    return (
        <div className="w-full max-w-xs text-center">
            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={member.image} alt={member.name} />
            <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">{member.name}</h3>
                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">{member.title}</span>
            </div>
        </div>
    );
};

export default TeamMemberCard;