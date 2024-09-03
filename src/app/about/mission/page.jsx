import Link from "next/link";

const AboutPage = () => {
    return (
        <div>
            <h1 className="mb-4">I am about page</h1>
            <Link className="mt-2 p-2 bg-red-600 rounded text-white" href={"/about/mission/vission"} >Vision Page</Link>
        </div>
    );
};

export default AboutPage;