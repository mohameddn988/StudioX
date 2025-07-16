"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from '@/Components/ui/button'
import { ArrowLeft, Home, Search } from 'lucide-react'

export default function NotFound(){
    const pathname = usePathname();

    useEffect(() => {
        console.error(
        "404 Error: User attempted to access non-existent route:",
        pathname
        );
    }, [pathname]);

    // TODO: Fix hydration mismatch - consider using dynamic import or suppressHydrationWarning

    return(
        <div className="h-screen bg-black text-slate-100 overflow-hidden flex flex-col">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-slate-950" />
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/3 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {/* Header */}
            <header className="relative z-10 p-8 lg:p-16">
                <div className="text-2xl font-light tracking-wide">
                    STUDIO<span className="text-purple-400">X</span>
                </div>
            </header>

            {/* Main Content */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
                {/* 404 Display */}
                <div className="mb-8">
                    <h1 className="text-8xl lg:text-9xl font-extralight leading-none mb-4 text-transparent bg-gradient-to-b from-slate-100 to-slate-400 bg-clip-text">
                        4<span className="text-purple-400">0</span>4
                    </h1>
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto" />
                </div>

                {/* Error Message */}
                <div className="max-w-2xl mb-12">
                    <h2 className="text-3xl lg:text-4xl font-extralight mb-6 leading-tight">
                        Page Not <span className="text-purple-400">Found</span>
                    </h2>
                    <p className="text-xl text-slate-400 font-light leading-relaxed mb-4">
                        The page you're looking for seems to have vanished into the digital void.
                    </p>
                    <p className="text-lg text-slate-500 font-light">
                        But don't worry, our creative journey continues elsewhere.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                        size="lg"
                        className="bg-purple-600 hover:bg-purple-700 text-white hover:text-white border-0 px-8 py-6 text-lg font-light transition-all duration-500 hover:scale-105"
                        onClick={() => window.location.href = '/'}
                    >
                        <Home className="mr-2 h-5 w-5" />
                        Back to Home
                    </Button>
                    <Button 
                        variant="outline" 
                        size="lg"
                        className="border-slate-400/40 bg-transparent text-slate-100 hover:bg-slate-800/50 hover:border-purple-400/60 hover:text-white transition-all duration-500 px-8 py-6 text-lg font-light"
                        onClick={() => window.history.back()}
                    >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Go Back
                    </Button>
                </div>
            </div>

            {/* Footer */}
            <footer className="relative z-10 p-4 text-center">
                <p className="text-slate-500 font-light text-sm">
                    © 2024 StudioX. Even our errors are crafted with creativity.
                </p>
            </footer>
        </div>
    );
}