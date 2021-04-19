interface SectionProps {
    classes?: string;
    children?: any;
    hasBgDetail?: boolean;
}

const Section: React.FC<SectionProps> = ({
    classes,
    children,
    hasBgDetail = false,
}) => {
    return (
        <div className={`relative py-20 md:py-24 ${classes}`}>
            {hasBgDetail && (
                <div className="absolute inset-0 h-full w-full flex flex-row items-center justify-between">
                    <div className="flex-none bg-gray-50 w-1 h-full"></div>
                    <div className="flex-none bg-gray-50 w-1 h-full"></div>
                    <div className="flex-none bg-gray-50 w-1 h-full"></div>
                    <div className="flex-none bg-gray-50 w-1 h-full"></div>
                    <div className="flex-none bg-gray-50 w-1 h-full"></div>
                    <div className="flex-none bg-gray-50 w-1 h-full"></div>
                    <div className="flex-none bg-gray-50 w-1 h-full"></div>
                    <div className="flex-none bg-gray-50 w-1 h-full"></div>
                </div>
            )}
            {children}
        </div>
    );
};
export default Section;
