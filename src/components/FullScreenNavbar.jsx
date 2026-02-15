import { X, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useTransform,
  useScroll,
} from "framer-motion";
import { useEffect } from "react";

export default function FullScreenNavbar({ open, setOpen }) {
  const { scrollY } = useScroll();
  const iconHoverBg = useTransform(scrollY, [0, 300], ["#ffffff", "#6E6259"]);
  const border = useTransform(scrollY, [0, 300], ["#ffffff", "#6E6259"]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  const sections = [
    {
      title: "Hotel at a Glance",
      items: [
        { label: "concept", hoverText: "sublime modern minimalism" },
        { label: "location" },
        { label: "explore praiano" },
        { label: "our sustainability journey" },
        { label: "shop ca" },
      ],
    },
    {
      title: "Suites",
      items: [
        { label: "angelina suite" },
        { label: "azure suite" },
        { label: "vermarine suite" },
      ],
    },
    {
      title: "Dining",
      items: [
        { label: "taste" },
        { label: "breakfast" },
        { label: "un piano nel cielo, italian fine dining" },
        { label: "wine cellar" },
        { label: "seascape casual dining" },
        { label: "seascape cocktail bar" },
        { label: "rooftop terrace" },
      ],
    },
    {
      title: "Guest Services",
      items: [
        { label: "wellbeing" },
        { label: "pool" },
        { label: "beach" },
        { label: "the grounds" },
        { label: "our boats" },
        { label: "concierge" },
      ],
    },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-6 py-6"
        >
          <motion.div
            initial={{ scale: 0.96, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 26, stiffness: 210 }}
            className="relative w-full h-full bg-[#d7cfc5] text-[#5e5750] rounded-[22px] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-10 py-8 sticky top-0 bg-[#d7cfc5] z-20">
              <button
                onClick={() => setOpen(false)}
                className="w-12 h-12 rounded-full border border-[#bfb6ac] flex items-center justify-center hover:bg-white/40 transition"
              >
                <X size={20} strokeWidth={1} />
              </button>

              <div className="flex items-center gap-8">
                <div className="flex items-center gap-4">
                  {[
                    {
                      d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
                      view: "0 0 24 24",
                    },
                    {
                      d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                      view: "0 0 24 24",
                    },
                    {
                      d: "M15.203,17.138H15.11c-0.718,2.019-2.022,3.028-3.911,3.028c-1.417,0-2.56-0.529-3.427-1.586 c-0.868-1.057-1.302-2.521-1.302-4.391c0-2.42,0.601-4.389,1.802-5.906s2.649-2.275,4.343-2.275c1.531,0,2.49,0.618,2.88,1.855 h0.062l0.153-1.569h3.466c-0.462,4.502-0.694,7.446-0.694,8.83c0,1.48,0.39,2.219,1.171,2.219c0.822,0,1.5-0.56,2.033-1.68 c0.534-1.12,0.802-2.584,0.802-4.391c0-2.473-0.766-4.5-2.295-6.08c-1.531-1.58-3.666-2.37-6.408-2.37 c-2.937,0-5.379,1.054-7.324,3.163c-1.946,2.108-2.919,4.68-2.919,7.713c0,2.938,0.86,5.253,2.58,6.944 c1.72,1.691,4.094,2.537,7.124,2.537c2.311,0,4.426-0.454,6.346-1.363v3.028C17.836,25.614,15.577,26,12.815,26 c-3.79,0-6.873-1.118-9.25-3.353C1.188,20.412,0,17.408,0,13.634c0-3.847,1.268-7.081,3.805-9.702C6.34,1.311,9.606,0,13.6,0 c3.697,0,6.688,1.017,8.973,3.052S26,7.768,26,11.098c0,2.738-0.698,4.933-2.095,6.588c-1.396,1.654-3.127,2.481-5.19,2.481 c-1.016,0-1.844-0.28-2.48-0.84C15.597,18.766,15.253,18.036,15.203,17.138z M13.154,8.767c-0.924,0-1.676,0.542-2.256,1.625 c-0.581,1.084-0.871,2.338-0.871,3.765c0,1.015,0.198,1.805,0.593,2.371c0.395,0.566,0.905,0.848,1.532,0.848 c0.966,0,1.725-0.533,2.28-1.601c0.554-1.067,0.831-2.494,0.831-4.28c0-0.846-0.193-1.512-0.578-1.998S13.791,8.767,13.154,8.767z",
                      view: "0 0 26 26",
                    },
                  ].map((icon, index) => (
                    <motion.div
                      key={index}
                      style={{ borderColor: border }}
                      whileHover="hover"
                      className='group w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer overflow-hidden relative transition-none'
                    >
                      <motion.div
                        variants={{ hover: { y: "0%" } }}
                        initial={{ y: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ backgroundColor: iconHoverBg }}
                        className="absolute inset-0 w-full h-full"
                      />
                      <svg
                        className="w-4 h-4 z-10 transition-colors duration-300 fill-current group-hover:!text-[var(--icon-hover-color)]"
                        viewBox={icon.view}
                        style={{ color: "inherit" }}
                      >
                        <path d={icon.d} />
                      </svg>
                    </motion.div>
                  ))}
                </div>
                <div className="group rounded-full flex items-center gap-1 bg-white">
                  <button className="rounded-full px-4 py-3 font-bold font-[Geometria] text-md tracking-tight">
                    book now
                  </button>
                  <ArrowUpRight
                    size={18}
                    className="group-hover:-rotate-45 transition-all duration-300 mr-2"
                  />
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="grid grid-cols-12 px-16 pb-16 flex-1 overflow-hidden">
              {/* LEFT */}
              <div className="col-span-4 pr-8 sticky top-0 self-start">
                <h1 className="text-5xl font-serif italic mb-12">
                  Casa Angelina
                </h1>

                {[
                  "press",
                  "hotel policies",
                  "faq",
                  "leaders club",
                  "contacts",
                  "careers",
                ].map((item) => (
                  <p
                    key={item}
                    className="mb-4 cursor-pointer hover:translate-x-1 transition"
                  >
                    {item}
                  </p>
                ))}
              </div>

              {/* RIGHT SCROLL AREA */}
              <div
                data-lenis-prevent
                className="col-span-8 border-l border-[#bfb6ac]/40 pl-12 h-full overflow-y-auto overflow-x-hidden"
              >
                {sections.map((section, sIndex) => (
                  <div
                    key={section.title}
                    className={sIndex !== 0 ? "mt-12" : ""}
                  >
                    <SectionHeader title={section.title} />
                    {section.items.map((item, i) => (
                      <NavItem
                        key={item.label}
                        label={item.label}
                        hoverText={item.hoverText}
                        delay={i * 0.05}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SectionHeader({ title }) {
  return (
    <div className="mb-4">
      <h2 className="text-3xl font-light">{title}</h2>
      <div className="w-full h-[1px] bg-[#bfb6ac] mt-4" />
    </div>
  );
}

function NavItem({ label, hoverText, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="group flex justify-between items-center py-4 px-6 -mx-6 cursor-pointer rounded-full hover:bg-white/20 transition"
    >
      <span className="text-lg group-hover:translate-x-2 transition">
        {label}
      </span>

      <div className="flex items-center gap-4">
        {hoverText && (
          <span className="text-[12px] italic opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition text-[#8a8279]">
            {hoverText}
          </span>
        )}
        <div className="w-9 h-9 rounded-full border border-[#bfb6ac] flex items-center justify-center group-hover:bg-[#5e5750] group-hover:border-[#5e5750] group-hover:text-white transition">
          <ArrowRight size={14} strokeWidth={1} />
        </div>
      </div>
    </motion.div>
  );
}
