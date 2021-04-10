interface TitleProps {
    classes?: string;
    children?: any;
    smaller?: boolean;
}

const Title: React.FC<TitleProps> = ({
    classes,
    children,
    smaller = false,
}) => {
    return (
        <h2
            className={`font-patua ${
                smaller ? "text-4xl" : "text-5xl"
            } ${classes}`}
        >
            {children}
        </h2>
    );
};
export default Title;
