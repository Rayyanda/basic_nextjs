import Card from "@/components/card";
import Link from "next/link";
export default function Page()
{
    return (
        <>
            <div className="container mt-5">
                <p>Halaman Blog</p>
                <Link href={'/'} className="btn btn-success mb-2">Home</Link>
                <div className="row">
                    <div className="col-sm-4">
                        <Card title={'Ini title nya'} />
                    </div>
                </div>
            </div>
        </>
    )
}