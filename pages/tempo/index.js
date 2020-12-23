import Link from "next/link";

export default function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <h1>Tempo</h1>
            <div>{dynamicDateString}</div>
            <div>{props.staticDateString}</div>
        </div>
    );
}

export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString,
        },
        revalidate: 1,
    };
}
