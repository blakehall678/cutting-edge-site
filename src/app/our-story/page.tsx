"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Nav } from "@/components/nav";

export default function OurStoryPage() {
  useEffect(() => {
    const timeline = document.getElementById("timeline");
    const timelineProgress = document.getElementById("timelineProgress");
    const timelineItems = document.querySelectorAll(".timeline-item");

    function updateTimeline() {
      if (!timeline || !timelineProgress) return;

      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max((windowHeight * 0.5 - rect.top) / rect.height, 0),
        1
      );

      (timelineProgress as HTMLElement).style.height = `${progress * rect.height}px`;

      timelineItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < windowHeight * 0.8) {
          item.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", updateTimeline);
    window.addEventListener("resize", updateTimeline);
    updateTimeline();

    return () => {
      window.removeEventListener("scroll", updateTimeline);
      window.removeEventListener("resize", updateTimeline);
    };
  }, []);

  return (
    <>
      <Nav />

      <main className="our-story-page">
        <section className="our-story">
          <div className="our-story-header">
            <p className="our-story-label"></p>
            <h1>How It All Started</h1>
          </div>

          <div className="timeline" id="timeline">
            <div className="timeline-progress" id="timelineProgress"></div>

            <div className="timeline-item left">
              <div className="timeline-year">2022</div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-image">
                  <Image
                    src="/images/razor-closeup.jpg"
                    alt="Story image 1"
                    width={900}
                    height={600}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
                <div className="timeline-text">
                  <h3>The Problem</h3>
                  <p>
                    It started with a simple frustration. Razors collected buildup
                    quickly, and cleaning them properly was harder and more
                    time-consuming than it should have been.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-year">2023</div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-image">
                  <Image
                    src="/images/first-prototype.png"
                    alt="Story image 2"
                    width={900}
                    height={600}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
                <div className="timeline-text">
                  <h3>The Proof of Concept</h3>
                  <p>
                    We began exploring a better solution — something designed
                    specifically to clean razors effectively, easily,
                    and ready for everyday use.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-year">2024</div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-image">
                  <Image
                    src="/images/brushes.png"
                    alt="Story image 3"
                    width={900}
                    height={600}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
                <div className="timeline-text">
                  <h3>Prototype Testing</h3>
                  <p>
                    Early versions helped us test the shape, usability, and
                    cleaning performance of the product. Each round taught us what
                    needed to improve and what was already working.
                  </p>
                </div>
              </div>
            </div>

<               div className="timeline-item left">
              <div className="timeline-year">2025</div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-image">
                  <Image
                    src="/images/brush-handle.jpg"
                    alt="Story image 3"
                    width={900}
                    height={600}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
                <div className="timeline-text">
                  <h3>Final Design</h3>
                  <p>
                    From testing various materials and designs, we found the right balance of efficiancy, ease of use, and esthetics.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-year">2026</div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-image">
                  <Image
                    src="/images/ce-shower.png"
                    alt="Story image 4"
                    width={900}
                    height={600}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
                <div className="timeline-text">
                  <h3>The Launch</h3>
                  <p>
                    After refining the design, we created a razor cleaner built to
                    make razor care simpler, cleaner, and more effective for
                    everyday routines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}