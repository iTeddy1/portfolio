export default function SectionDivide({ sectionName }: { sectionName: string }) {
  return (
    <div className="flex items-center gap-5 py-[80px]">
      <h2 className="text-6xl font-extrabold">{sectionName}</h2>
      <div className="h-1 min-w-0 flex-grow bg-bgDark dark:bg-bgLight"></div>
    </div>
  );
}
