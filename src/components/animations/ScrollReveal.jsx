import React from "react";
import { useScrollRevel } from '../../hooks/useScrollReveal'

const ScrollReveal = (
    children,
    animation= 'fadeUp',
    delay= 0,
    duration=700
) => {

    const {ref, isVisible } = useScrollRevel({ threshold: 0.1});

    const animationClasse = {
        fadeUp: 'opacity-0 translate-y-8',
        fadeIn: 'opacity-0 ',
        slideLeft: 'opacity-0 -translate-x-12',
        slideRight: 'opacity-0 translate-x-12 ',
        scaleIn: 'opacity-0 scale-90'
    };
     const visibleClasses = 'opacity-100 translate-y-0 translate-x-0 scale-100';

    return (
        <div ref={ref} className={`transition-all ease-out ${isVisible ?  visibleClasses : animationClasse[animation]}`} style={{ transition: `${duration}ms`, transitionDelay: `${delay}ms`}}>
            {children}
        </div>
    )
}

export default ScrollReveal