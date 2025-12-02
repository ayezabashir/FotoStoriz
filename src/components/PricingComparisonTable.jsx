import React from 'react'

const PricingComparisonTable = () => {
  return (
    <div className='mx-4 flex flex-col items-center justify-center'>
      <div className='max-w-[420px] text-center'>
        <h2 className='font-black text-3xl mb-3'>Feature Comparison Table</h2>
        <p>Compare Features to find the perfect plan for your needs</p>
      </div>
      <table className='w-full bg-purple-50 rounded-lg my-7'>
        <thead>
          <tr className='border-b border-gray-300'>
            <th className='p-4 text-start'>Features</th>
            <th className='p-4'>Free Plan</th>
            <th className='p-4'>Pro Plan</th>
            <th className='p-4'>Creator Plan</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b border-gray-300'>
            <td className='p-4'>Unlimited photos</td>
            <td className='p-4 text-center '>✖</td>
            <td className='p-4 text-center text-purple-400'>✔ </td>
            <td className='p-4 text-center text-purple-400'>✔ </td>
          </tr>
          <tr className='border-b border-gray-300'>
            <td className='p-4'>Analytics </td>
            <td className='p-4 text-center'>✖</td>
            <td className='p-4 text-center text-purple-400'>✔</td>
            <td className='p-4 text-center text-purple-400'>✔</td>
          </tr>
          <tr className='border-b border-gray-300'>
            <td className='p-4'>Custom templates </td>
            <td className='p-4 text-center'>✖</td>
            <td className='p-4 text-center text-purple-400'>✔</td>
            <td className='p-4 text-center text-purple-400'>✔</td>
          </tr>
          <tr>
            <td className='p-4'>Collaboration </td>
            <td className='p-4 text-center'>✖</td>
            <td className='p-4 text-center'>✖</td>
            <td className='p-4 text-center text-purple-400'>✔</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PricingComparisonTable