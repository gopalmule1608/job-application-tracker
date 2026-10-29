import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/ui/Header'
import Button from '../components/ui/Button'
import { UserStore } from '../context/UserContext'

const features = [
  {
    icon: '▤',
    title: 'All Applications in One Place',
    description:
      'Keep company names, job roles, application dates, and statuses organized in one workspace.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: '◷',
    title: 'Track Your Progress',
    description:
      'Know which applications are pending, in progress, or moving toward an interview.',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: '✓',
    title: 'Stay Organized',
    description:
      'Build a consistent job-search routine and make it easier to follow up on opportunities.',
    color: 'bg-emerald-50 text-emerald-600',
  },
]

const steps = [
  {
    number: '01',
    title: 'Create your account',
    description:
      'Set up your personal workspace and get ready to manage your job search.',
  },
  {
    number: '02',
    title: 'Add your applications',
    description:
      'Record the company, role, application status, and other details you want to track.',
  },
  {
    number: '03',
    title: 'Track every opportunity',
    description:
      'Review your applications and keep your next career steps organized.',
  },
]

const Home = () => {
  const { user } = useContext(UserStore)
  const isLoggedIn = Boolean(user?.token)

  return (
    <div className="min-h-screen overflow-hidden bg-[#F5F7FB] text-slate-900">
      <Header />

      {/* HERO SECTION */}
      <section className="relative">
        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 top-52 h-80 w-80 rounded-full bg-indigo-200/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold text-blue-700 shadow-sm sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              YOUR PERSONAL JOB SEARCH WORKSPACE
            </div>

            <h1 className="mt-7 max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Your next opportunity.
              <span className="mt-2 block text-blue-600">
                One step at a time.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Job searching can get overwhelming. Keep your applications
              organized, monitor your progress, and focus on finding the
              opportunity that's right for you.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                text={isLoggedIn ? 'Open Dashboard →' : 'Get Started Free →'}
                handler={() =>
                  (window.location.hash = isLoggedIn ? '#/dashboard' : '#/register')
                }
                className="px-6 py-3.5"
              />

              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50/50"
              >
                Explore Features
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <span className="font-bold text-emerald-600">✓</span>
                Simple to use
              </span>
              <span className="flex items-center gap-2">
                <span className="font-bold text-emerald-600">✓</span>
                One organized workspace
              </span>
            </div>
          </div>

          {/* DASHBOARD VISUAL PREVIEW */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-200/60 via-indigo-100/40 to-transparent blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/10 sm:rounded-3xl">
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                    JT
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900">
                      Your Workspace
                    </h2>
                    <p className="text-xs text-slate-500">
                      Application overview
                    </p>
                  </div>
                </div>

                <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                  Dashboard
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <div className="mb-5">
                  <p className="text-xs font-medium text-slate-500">
                    YOUR JOB SEARCH AT A GLANCE
                  </p>
                  <h3 className="mt-1 text-xl font-bold tracking-tight text-slate-900">
                    Keep moving forward.
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-lg text-blue-700">
                      ▤
                    </div>
                    <p className="mt-4 text-xs font-medium text-slate-500">
                      Applications
                    </p>
                    <p className="mt-1 text-2xl font-extrabold text-slate-900">
                      <span className="text-blue-600">—</span>
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-lg text-violet-700">
                      ◷
                    </div>
                    <p className="mt-4 text-xs font-medium text-slate-500">
                      Interviews
                    </p>
                    <p className="mt-1 text-2xl font-extrabold text-slate-900">
                      <span className="text-violet-600">—</span>
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900">
                      Application pipeline
                    </h3>
                    <span className="text-xs text-slate-400">
                      Preview
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        role: 'Frontend Developer',
                        company: 'Company name',
                        status: 'Applied',
                        color: 'bg-blue-50 text-blue-700',
                        icon: '‹ ›',
                      },
                      {
                        role: 'React Developer',
                        company: 'Company name',
                        status: 'Interview',
                        color: 'bg-violet-50 text-violet-700',
                        icon: 'R',
                      },
                      {
                        role: 'Software Engineer',
                        company: 'Company name',
                        status: 'Review',
                        color: 'bg-amber-50 text-amber-700',
                        icon: 'S',
                      },
                    ].map((item) => (
                      <div
                        key={item.role}
                        className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 transition hover:border-blue-100 hover:bg-blue-50/30"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-bold text-slate-600">
                          {item.icon}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-slate-800">
                            {item.role}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {item.company}
                          </p>
                        </div>

                        <span
                          className={`shrink-0 rounded-lg px-2 py-1 text-[10px] font-semibold sm:text-xs ${item.color}`}
                        >
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-lg text-blue-600">✦</span>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Your search, more organized
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-600">
                        A single place to review your opportunities and plan
                        your next step.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-center text-[10px] text-slate-400">
                  Illustrative dashboard preview · Not live account data
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:block lg:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-xl text-emerald-600">
                  ✓
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Stay on track
                  </p>
                  <p className="text-xs text-slate-500">
                    One step at a time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="border-y border-slate-200/70 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Everything in one place
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              A smarter way to manage your job search.
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              Spend less time managing scattered information and more time
              preparing for your next opportunity.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="group rounded-2xl border border-slate-200/80 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl font-bold ${feature.color}`}
                >
                  {feature.icon}
                </div>

                <p className="mt-6 text-xs font-bold tracking-widest text-slate-400">
                  0{index + 1}
                </p>

                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {feature.description}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-16" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Simple workflow
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                From application to opportunity.
              </h2>

              <p className="mt-5 max-w-lg leading-8 text-slate-500">
                Start with a simple process. Add your applications, keep
                details updated, and use your workspace to stay focused.
              </p>

              <Button
                text="Start Your Journey →"
                handler={() =>
                  (window.location.hash = isLoggedIn ? '#/dashboard' : '#/register')
                }
                className="mt-7"
              />
            </div>

            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-5 rounded-2xl border border-slate-200/80 bg-white p-5 transition hover:border-blue-200 hover:shadow-lg hover:shadow-slate-900/5 sm:gap-6 sm:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-extrabold text-blue-600">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#111827] px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-300">
              YOUR NEXT CHAPTER BEGINS HERE
            </span>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Ready to take control of your job search?
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Create your workspace, organize your opportunities, and make
              every application easier to manage.
            </p>

            <Button
              text={isLoggedIn ? 'Go to Dashboard →' : 'Create Your Free Account →'}
              handler={() =>
                (window.location.hash = isLoggedIn ? '#/dashboard' : '#/register')
              }
              className="mt-8"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-xs font-bold text-white">
              JT
            </div>
            <span className="font-bold text-slate-900">JobTrack</span>
          </Link>

          <p className="text-sm text-slate-500">
            Stay organized. Keep moving forward.
          </p>

          <div className="flex gap-5 text-sm font-medium text-slate-500">
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>
            <Link to="/login" className="hover:text-blue-600">
              Login
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-100 px-5 py-4 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} JobTrack. Built to organize your career journey.
        </div>
      </footer>
    </div>
  )
}

export default Home