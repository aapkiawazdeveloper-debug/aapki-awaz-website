import Link from "next/link";

const ArticleCard = () => {
    return (
        <Link  href="/" className="shadow-sm">
            <iframe className="w-full h-auto"
                width="560"
                height="800"
                src="https://www.youtube.com/embed/psyZHwBx9Cg?si=XLl7dgw1kprxPki5"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />

            <div className="p-3">
                <h2 className="font-helvetica font-semibold text-md">वोट चोरी के आरोपों को लेकर चुनाव आयोग के खिलाफ कांग्रेस ने किया विरोध प्रदर्शन</h2>
                <p className="font-helvetica text-base pt-1">राजस्थान कांग्रेस कमेटी द्वारा प्रदेशाध्यक्ष गोविन्द सिंह डोटासरा के नेतृत्व में आज राजधानी जयपुर में 'वोट चोरी' और चुनावी प्रक्रिया........</p>
            </div>
        </Link>
    )
}

export default ArticleCard;
