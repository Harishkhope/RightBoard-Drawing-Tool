import { Link } from "react-router-dom"
import square from "../assets/Square.gif"
const Home = () => {
    return (
        <div key="1" className="flex flex-col min-h-screen font-pop">
            <header className="flex h-24 w-full  items-center px-4 md:px-6 mb-5 mt-2">

                <div className="hidden sm:block">
                    <Link to="/">
                        <img src={square} alt="Icon" style={{ width: "100px", height: "100px" }} className="  "/>
                    </Link>
                </div>

                <div className="flex w-full justify-center h-24">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl/none font-bold bg-gradient-to-r from-green-400 to-blue-500 inline-block text-transparent bg-clip-text">RightBoard</h1>
                </div>
            </header>
            <main className="flex-1">
                <section className="w-full">
                    <div className="container px-4 md:px-6">
                        <div className="h-96 flex flex-col items-center justify-center space-y-4 text-center bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg rounded-lg p-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold  sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Welcome to RightBoard
                                </h1>
                                <p className="mx-auto max-w-[700px]">Your Ultimate WorkSpace! Anytime,Anywhere.</p>
                            </div>
                            <div className="space-y-4 space-x-4 ">
                                <Link
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                    to="/draw"
                                >
                                    Get Started
                                </Link>
                                <a
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-white px-8 text-sm font-medium text-white shadow transition-colors hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                    href="https://tldraw.dev/docs/editor"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Key Features</h2>
                                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Explore the amazing features that make our app stand out.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <VariableIcon className="h-10 w-10" />
                                <h3 className="text-xl font-bold">Customizable Workspace</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Customize your workspace to fit your team's needs and enhance productivity.
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <ImportIcon className="h-10 w-10" />
                                <h3 className="text-xl font-bold">Easy Integrations</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Integrate with your favorite tools and boost your productivity.
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <LockIcon className="h-10 w-10" />
                                <h3 className="text-xl font-bold">Secure & Reliable</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    We prioritize your data security and system reliability.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">© Rightboard App. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" to="#">
                        Terms of Service
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" to="#">
                        Privacy
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" to="#">
                        Contact
                    </Link>
                </nav>
            </footer>
        </div>
    )
}

export default Home

function CircuitBoardIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M11 9h4a2 2 0 0 0 2-2V3" />
            <circle cx="9" cy="9" r="2" />
            <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
            <circle cx="15" cy="15" r="2" />
        </svg>
    )
}


function ImportIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 3v12" />
            <path d="m8 11 4 4 4-4" />
            <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
        </svg>
    )
}


function LockIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    )
}


function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function VariableIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 21s-4-3-4-9 4-9 4-9" />
            <path d="M16 3s4 3 4 9-4 9-4 9" />
            <line x1="15" x2="9" y1="9" y2="15" />
            <line x1="9" x2="15" y1="9" y2="15" />
        </svg>
    )
}
