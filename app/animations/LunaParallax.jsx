"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LunaParallax({ children }) {
    const sectionRef = useRef(null);
    const mockupRef = useRef(null);
    const orbRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const mockup = mockupRef.current;

        if (!section || !mockup) return;

        const ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        // Desktop / tablet
        mm.add("(min-width: 768px)", () => {
            const orb = section.querySelector(".luna-orb");

            gsap.fromTo(
                mockup,
                {
                y: 70,
                scale: 0.96,
                },
                {
                y: -45,
                scale: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
                }
            );

            if (orb) {
                gsap.fromTo(
                orb,
                {
                    y: 40,
                    rotation: -4,
                },
                {
                    y: -60,
                    rotation: 4,
                    ease: "none",
                    scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.4,
                    },
                }
                );
            }
            });

        // Mobile
        mm.add("(max-width: 767px)", () => {
            gsap.fromTo(
            mockup,
            {
                y: 30,
                scale: 0.98,
            },
            {
                y: -15,
                scale: 1,
                ease: "none",
                scrollTrigger: {
                trigger: section,
                start: "top 85%",
                end: "bottom 15%",
                scrub: 1,
                },
            }
            );
        });
        }, section);

        return () => {
        ctx.revert();
        };
    }, []);

    return (
        <div ref={sectionRef}>
        <div ref={mockupRef}>
            {children}
        </div>
        </div>
    );
}