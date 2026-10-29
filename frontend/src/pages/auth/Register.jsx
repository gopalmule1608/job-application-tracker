import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { userRegister } from '../../services/user.service'

const Register = () => {
  const navigate = useNavigate()
  const { handleSubmit, register } = useForm()

  function handleData(data) {
    userRegister(data).then((res) => {
      console.log(res)
      navigate('/login')
    })
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F7FB] px-4 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/5 md:grid-cols-2">

        <section className="relative hidden flex-col justify-between overflow-hidden bg-[#111827] p-10 text-white md:flex lg:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

          <Link to="/" className="relative inline-flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-bold">
              JT
            </div>
            <span className="font-bold">JobTrack</span>
          </Link>

          <div className="relative my-12">
            <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-300">
              START YOUR JOURNEY
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight lg:text-5xl">
              A little more
              <span className="text-blue-400"> organized.</span>
              A lot more focused.
            </h1>

            <p className="mt-5 max-w-sm leading-7 text-slate-400">
              Create your workspace and bring your job applications,
              follow-ups, and career goals together.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold">One workspace. More clarity.</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Spend less time remembering where you applied and more time
                preparing for the opportunities ahead.
              </p>
            </div>
          </div>

          <p className="relative text-xs text-slate-500">
            Start building your next opportunity today.
          </p>
        </section>

        <section className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
          <form
            onSubmit={handleSubmit(handleData)}
            className="w-full max-w-md"
          >
            <div className="mb-8">
              <p className="text-sm font-semibold text-blue-600">
                CREATE YOUR ACCOUNT
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Join JobTrack
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Set up your account and start organizing your job search.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <Input
                type="text"
                placeholder="Enter your full name"
                text="Full name"
                name="name"
                register={register}
              />

              <Input
                type="email"
                placeholder="you@example.com"
                text="Email address"
                name="email"
                register={register}
              />

              <Input
                type="password"
                placeholder="Create a password"
                text="Password"
                name="password"
                register={register}
              />

              <Button
                type="submit"
                text="Create account →"
                className="mt-2 w-full py-3.5"
              />
            </div>

            <p className="mt-7 text-center text-sm text-slate-500">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Sign in
              </Link>
            </p>

            <Link
              to="/"
              className="mt-6 block text-center text-xs text-slate-400 hover:text-slate-600"
            >
              ← Back to home
            </Link>
          </form>
        </section>
      </div>
    </main>
  )
}

export default Register