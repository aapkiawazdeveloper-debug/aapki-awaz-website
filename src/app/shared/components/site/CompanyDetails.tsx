import Link from 'next/link'
import React from 'react'

const CompanyDetails = () => {
    return (
        <div className="flex flex-col gap-y-1 mb-4">
            <h1 className="text-[#222] text-xl font-medium">Contact Us</h1>
            <p className="text-sm font-normal text-[#666]">AAP KI AWAZ PUBLICATION</p>
            <p className="text-sm font-normal text-[#666]">
                8/248, AMIT BHARDWAJ MARG, MALVIYA NAGAR, Jaipur, Rajasthan, 302017
            </p>
            <p className="text-sm font-normal text-[#666]">OR : BRANCH OFFICE</p>
            <p className="text-sm font-normal text-[#666]">AAP KI AWAZ PUBLICATION</p>
            <p className="text-sm font-normal text-[#666]">
                Plot No 4/18, 1st floor, above HDFC Bank, Shivanand Marg, Malviya Nagar, Jaipur, Rajasthan 302017
            </p>
            <p className="text-sm font-normal text-[#666]">
                Mobile No. 91 7733915196 / 9660557319
            </p>
            <p className="text-sm font-normal text-[#666]">
                WhatsApp:{" "}
                <Link
                    target="_blank"
                    href="http://wa.me/917733915196"
                    className="text-[#337ab7] hover:underline"
                >
                    http://wa.me/917733915196
                </Link>
            </p>
            <p className="text-sm font-normal text-[#666]">
                More Details Visit:{" "}
                <Link
                    target="_blank"
                    href="http://www.AapKiAwaz.in"
                    className="text-[#337ab7] hover:underline"
                >
                    www.AapKiAwaz.in
                </Link>
                <span>{" "} / {" "}</span>
                <Link
                    target="_blank"
                    href="https://www.a369.in/aka"
                    className="text-[#337ab7] hover:underline"
                >
                    www.a369.in/aka
                </Link>
                <span>{" "} / {" "}</span>
                <Link
                    target="_blank"
                    href="http://www.a369.in/Job"
                    className="text-[#337ab7] hover:underline"
                >
                    www.a369.in/Job
                </Link>
            </p>
            <p className="text-sm font-normal text-[#666]">
                E-Mail ID:{" "}
                <Link
                    href="mailto:info@AapKiAwaz.in"
                    className="text-[#337ab7] hover:underline"
                >
                    info@AapKiAwaz.in
                </Link>
                {" "} / {" "}
                <Link
                    href="mailto:arunkoolwal@gmail.com"
                    className="text-[#337ab7] hover:underline"
                >
                    arunkoolwal@gmail.com
                </Link>
            </p>
        </div>
    )
}

export default CompanyDetails
