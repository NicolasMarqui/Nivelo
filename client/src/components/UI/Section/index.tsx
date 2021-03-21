interface SectionProps {
    classes?: string;
    children?: any;
}

const Section: React.FC<SectionProps> = ({ classes, children }) => {
    return <div className={`relative py-7 md:py-9 ${classes}`}>{children}</div>;
};
export default Section;
