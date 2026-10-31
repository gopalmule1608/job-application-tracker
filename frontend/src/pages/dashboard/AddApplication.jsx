
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'
import { useForm } from 'react-hook-form'
import { sendData } from '../../services/application.service'
import { useNavigate } from 'react-router-dom'
const AddApplication = () => {

  const { handleSubmit, register } = useForm()
const navigate  = useNavigate()
  useNavigate()
  function handleData(data) {
    sendData(data)
    navigate('/dashboard/all-application')
  }

  return (
    <div>
      <form className='grid grid-cols-2 gap-4 ' onSubmit={handleSubmit(handleData)}>
        <Input
          type="text"
          placeholder="Enter a Company name"
          text="Company Name"
          register={register}
          name="companyName" />


        <Input
          type="text"
          placeholder="Enter a Job Title eg.frontend"
          text="Job Title"
          register={register}
          name="jobTitle" />


        <Input
          type="text"
          placeholder="Enter a location"
          text="Location"
          register={register}
          name="location" />

        <Input
          type="text"
          placeholder="Enter a url"
          text="URL"
          register={register}
          name="jobUrl" />


        <Input
          type="text"
          placeholder="Enter a note"
          text="Note"
          register={register}
          name="notes" />

        <Button
          type="submit"
          text="Create Application"
          className="mt-2 w-fit py-1" />
      </form>

    </div>
  )
}

export default AddApplication
