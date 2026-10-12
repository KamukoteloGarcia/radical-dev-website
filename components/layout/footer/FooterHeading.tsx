export function FooterHeading({ children }: { children: string }) {
  return (
    <h3 className="font-display text-[16px] font-semibold text-fg">
      {children}
      <span aria-hidden="true" className="mt-2 block h-0.5 w-7 rounded-full bg-red" />
    </h3>
  );
}
