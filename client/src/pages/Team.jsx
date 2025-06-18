import React, { useState } from 'react'
import TeamMemberCard from '../components/TeamMemberCard';
import TeamCategoryButton from '../components/TeamCategoryButton';
import { teamMembersData} from '../data'; 

const Team = () => {
  const [selectedCategory, setSelectedCategory] = useState('executive'); 

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const currentTeam = teamMembersData[selectedCategory] || []; 
  return (
  <section className='bg-white dark:bg-gray-900' id='team'>
            <div className='container px-6 py-10 mx-auto max-w-6xl'>
                <h1 className='text-2xl font-semibold text-center text-amber-300 capitalize lg:text-3xl'>our team</h1>

                <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                </p>

                <div className='flex items-center justify-center'>
                    <div className='flex items-center p-1 border border-amber-300 dark:border-blue-400 rounded-xl'>
                        <TeamCategoryButton
                            category='executive'
                            isActive={selectedCategory === 'executive'}
                            onClick={handleCategoryClick}
                        />
                        <span className='mx-4 md:mx-8'>
                            <TeamCategoryButton
                                category='development'
                                isActive={selectedCategory === 'development'}
                                onClick={handleCategoryClick}
                            />
                        </span>
                        <TeamCategoryButton
                            category='marketing'
                            isActive={selectedCategory === 'marketing'}
                            onClick={handleCategoryClick}
                        />
                    </div>
                </div>

                <div className='grid gap-5 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                    {currentTeam.map(member => (
                        <TeamMemberCard key={member.id} member={member} />
                    ))}
                </div>
            </div>
        </section>

  )
}

export default Team