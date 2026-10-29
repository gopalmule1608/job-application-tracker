    import Input from '../../components/ui/Input'
    import Button from '../../components/ui/Button'
    import { Link, useNavigate } from 'react-router-dom'
    import { useForm } from 'react-hook-form'
    import { userLogin } from '../../services/user.service'
    import { useContext } from 'react'
    import { UserStore } from '../../context/UserContext'

    const Login = () => {
    const navigate = useNavigate()
    const { setUser } = useContext(UserStore)
    const { handleSubmit, register } = useForm()

    function handleData(data) {
        userLogin(data).then((res) => {
        setUser(res)
        localStorage.setItem('token', res.token)
        navigate('/')
        console.log(res)
        })
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#F5F7FB] px-4 py-10">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/5 md:grid-cols-2">

            <section className="relative hidden flex-col justify-between overflow-hidden bg-[#111827] p-10 text-white md:flex lg:p-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

            <div className="relative">
                <Link to="/" className="inline-flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-bold">
                    JT
                </div>
                <span className="font-bold">JobTrack</span>
                </Link>
            </div>

            <div className="relative my-12">
                <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-300">
                YOUR NEXT CHAPTER STARTS HERE
                </span>

                <h1 className="mt-6 text-4xl font-bold leading-tight lg:text-5xl">
                Make your job search
                <span className="text-blue-400"> work for you.</span>
                </h1>

                <p className="mt-5 max-w-sm leading-7 text-slate-400">
                Keep applications organized, track your progress, and stay
                focused on your next opportunity.
                </p>

                <div className="mt-9 space-y-4 text-sm text-slate-300">
                {[
                    'Keep all applications in one place',
                    'Stay organized throughout your search',
                    'Build momentum toward your next role',
                ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/15 text-blue-400">
                        ✓
                    </span>
                    {item}
                    </div>
                ))}
                </div>
            </div>

            <p className="relative text-xs text-slate-500">
                Your career journey, one step at a time.
            </p>
            </section>

            <section className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
            <form
                onSubmit={handleSubmit(handleData)}
                className="w-full max-w-md"
            >
                <div className="mb-8">
                <p className="text-sm font-semibold text-blue-600">
                    WELCOME BACK
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                    Sign in to JobTrack
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                    Enter your details to continue managing your applications.
                </p>
                </div>

                <div className="flex flex-col gap-5">
                <Input
                    type="email"
                    placeholder="you@example.com"
                    text="Email address"
                    register={register}
                    name="email"
                />

                <Input
                    type="password"
                    placeholder="Enter your password"
                    text="Password"
                    register={register}
                    name="password"
                />

                <Button
                    type="submit"
                    text="Sign in to your account →"
                    className="mt-2 w-full py-3.5"
                />
                </div>

                <p className="mt-7 text-center text-sm text-slate-500">
                Don't have an account?{' '}
                <Link
                    to="/register"
                    className="font-semibold text-blue-600 hover:text-blue-700"
                >
                    Create one
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

    export default Login