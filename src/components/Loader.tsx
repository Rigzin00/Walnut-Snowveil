import { useEffect, useRef } from "react";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const barRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let progress = 0;
    let phase = 1;
    let frame: number;

    const bar = barRef.current!;
    const logo = logoRef.current!;
    const brand = brandRef.current!;

    const animate = () => {
      if (phase === 1) {
        progress += 0.6; // slower = smoother
        bar.style.width = progress + "%";

        if (progress > 40) {
          logo.classList.add("pop-logo");
          brand.classList.add("pop-text");
        }

        if (progress >= 100) {
          phase = 2;

          setTimeout(() => {
            logo.classList.remove("pop-logo");
            brand.classList.remove("pop-text");

            logo.classList.add("hide-logo");
            brand.classList.add("hide-text");
          }, 350);
        }
      } else if (phase === 2) {
        progress -= 0.6;
        bar.style.marginLeft = 100 - progress + "%";

        if (progress <= 0) {
          cancelAnimationFrame(frame);
          setTimeout(onFinish, 200);
          return;
        }
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#ece9e6] z-50">
      <div className="text-center relative">
        {/* Logo mask */}
        <div className="h-[80px] overflow-hidden flex justify-center">
          <div
            ref={logoRef}
            className="translate-y-[80px] transition-transform duration-500 ease-[cubic-bezier(.65,.05,.36,1)]"
          >
            <img src="/img/Logo.svg" alt="Logo" className="h-[80px]" />
          </div>
        </div>

        {/* line */}
        <div className="w-[220px] h-[2px] bg-[#d8e3e4] mx-auto my-[10px] relative overflow-hidden">
          <div
            ref={barRef}
            className="h-full w-[0%] bg-[#203a3d] transition-all duration-[60ms] linear"
          />
        </div>

        {/* text mask */}
        <div className="h-[55px] overflow-hidden flex justify-center">
          <div
            ref={brandRef}
            className="text-center -translate-y-[55px] transition-transform duration-500 ease-[cubic-bezier(.65,.05,.36,1)]"
          >
            <h1 className="text-[22px] tracking-[3px] text-[#203a3d]">
             WALNUT SNOWVEIL
            </h1>
            <p className="text-[9px] tracking-[4px] text-[#203a3d] mt-[4px]">
              HOTELS & RESORTS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}