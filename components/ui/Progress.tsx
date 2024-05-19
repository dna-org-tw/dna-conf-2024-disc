export default function Progress({ progress }: { progress: number }) {
  return (
    <div className="relative w-full">
      <div
        style={{ width: progress + "%" }}
        className={`absolute bg-white h-[10px] rounded-full`}
      />
      <div className="absolute bg-white bg-opacity-30 h-[10px] rounded-full w-full"></div>
    </div>
  );
}
