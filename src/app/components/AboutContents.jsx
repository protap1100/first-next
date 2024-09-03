import Link from "next/link";

const AboutContents = () => {
  return (
    <div className="flex gap-2 mt-2">
      <Link className="p-2 bg-cyan-500 rounded" href={"/about/history"}>History</Link>
      <Link className="p-2 bg-cyan-500 rounded" href={"/about/mission"}>Mission</Link>
    </div>
  );
};

export default AboutContents;
