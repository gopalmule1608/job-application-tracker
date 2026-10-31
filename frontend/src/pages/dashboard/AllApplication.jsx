import React from 'react'
import { useEffect } from 'react'
import { getApplications } from '../../services/application.service'
import { useState } from 'react'
import Button from '../../components/ui/Button'
import api from '../../lib/axios'
import { useNavigate } from 'react-router-dom'

const AllApplication = () => {

  const [application, setApplication] = useState([])

const navigate = useNavigate
  function deleteApplication(id) {
    api.delete(`/application/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    )
 

  }


  useEffect(() => {
    getApplications().then((res) => {
      try {
        let data = res.applications
        console.log(res)
        setApplication(data)
      } catch (error) {
        console.log(error)
      }
    })
  }, [])


  return (
    <div className='flex gap-10 grid grid-cols-4'>
      {
        application.length > 0 ?
          application.map((elem, idx) => {
            return (
              <div id={idx} className='bg-gray-100 gap-1 flex flex-col p-4 rounded-2xl shadow-xl border'>
                <h1 className='text-2xl font-bold'>{elem.companyName}</h1>
                <h3 className='text-xl font -semibold font-sans'>{elem.jobTitle}</h3>
                <p className='bg-cyan-200 w-fit px-2 rounded font-bold '>{elem.location}</p>
                <p>Status: <span className='text-green-500'>{elem.status}</span></p>
                <Button
                  type="button"
                  text="Delete"
                  className="mt-2 w-fit py-0"
                  handler={() => { deleteApplication(elem._id) }}

                />
              </div>
            )
          })
          :
          <h1>No application found</h1>
      }
    </div>
  )
}

export default AllApplication
