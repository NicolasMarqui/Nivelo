interface PreTitleProps {
    classes?: string;
    children?: any;
}

const PreTitle: React.FC<PreTitleProps> = ({ classes, children }) => {
    return (
        <p className={`text-sm text-primaryOrange mb-1 ${classes}`}>
            {children}
        </p>
    );
};
export default PreTitle;
