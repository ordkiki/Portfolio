import React from 'react'

function About() {
  return (
    <div className='sm:p-0 p-4 w-[96vw] lg:w-[30vw]'>
    <p className='Skills font-bold text-[24px]'>Apropos de moi</p>
    <p className='text-[rgba(255,255,255,0.4)] my-4 text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis sit odit mollitia nihil corrupti fugit officiis adipisci rerum quaerat!</p>
    <div className='flex justify-between'>
        <table className='sm:p-0 p-4 w-[96vw] lg:w-[30vw]'>
          <tr>
            <td>Name :</td>
            <td>RAKOTOARINO</td>
          </tr>
          <tr>
            <td>First name : </td>
            <td>Onjaniaina Rolland</td>
          </tr>
          <tr>
            <td>Adresse : </td>
            <td>II E 34 ZG Ambohidahy</td>
          </tr>
          <tr>
            <td>Nationality : </td>
            <td>Malagasy</td>
          </tr>
          <tr>
            <td>Language : </td>
            <td>Malagasy , French ,English (casual)</td>
          </tr>
        </table>
    </div>
</div>
  )
}

export default About