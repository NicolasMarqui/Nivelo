interface TitleProps {
    classes?: string;
    children?: any;
}

const Title: React.FC<TitleProps> = ({ classes, children }) => {
    return <h2 className={`font-patua text-5xl ${classes}`}>{children}</h2>;
};
export default Title;
