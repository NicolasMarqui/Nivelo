import Link from "next/link";
import React from "react";

interface ListProps {
    id: number;
    text: string;
    linkTo?: string;
}

interface BreadcumbProps {
    list: ListProps[] | [];
    classes?: string;
}

const Breadcumb: React.FC<BreadcumbProps> = ({ list, classes }) => {
    return (
        <div className="relative">
            <ol className="list-reset rounded flex bg-grey-light text-grey">
                <li className="px-2">
                    <Link href="/">
                        <a
                            className={`no-underline text-white text-lg hover:underline ${classes}`}
                        >
                            Home
                        </a>
                    </Link>
                </li>
                <li className="text-white ">/</li>
                {list.map((l: ListProps, idx: number) => (
                    <React.Fragment key={l.id}>
                        <li className="px-2">
                            {l.linkTo ? (
                                <Link href={l.linkTo}>
                                    <a
                                        className={`no-underline text-white text-lg hover:underline ${classes}`}
                                    >
                                        {l.text}
                                    </a>
                                </Link>
                            ) : (
                                <p
                                    className={`no-underline text-white text-lg ${classes}`}
                                >
                                    {l.text}
                                </p>
                            )}
                        </li>
                        <li
                            className={`text-white ${
                                idx === list.length - 1 ? "last__item" : ""
                            }`}
                        >
                            /
                        </li>
                    </React.Fragment>
                ))}
            </ol>
        </div>
    );
};
export default Breadcumb;
