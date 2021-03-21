interface BgIconProps {
    bgColor: string;
    icon: React.ReactElement;
}

const BgIcon: React.FC<BgIconProps> = ({ bgColor, icon }) => {
    return (
        <div
            className={`flex p-4 md:p-2 rounded-lg md:w-14 justify-center items-center my-5 m-auto md:m-0 md:my-5`}
            style={{ background: bgColor }}
        >
            {icon}
        </div>
    );
};
export default BgIcon;
