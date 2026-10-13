// Card list that scrolls sideways (with snapping) on phones and becomes a normal grid from `md`.
// The negative margin lets cards slide under the page padding, edge to edge.
export const scrollRow =
  "-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-6 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:grid md:overflow-visible md:p-0";

// Width of each card while the row scrolls (shows a peek of the next card).
export const scrollItem = "w-[82%] shrink-0 snap-start sm:w-[60%] md:w-auto";
