import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="py-6 text-center text-white/60 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                © {year} Pravin Shelke — Built with Pravin Shelke
            </div>
        </footer>
    )
}

export default Footer