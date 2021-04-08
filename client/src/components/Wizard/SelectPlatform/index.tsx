interface SelectPlatformProps {
    platform: {
        id: number;
        name: string;
        icon: string;
    };
    handleSelectedPlatform: (i: any) => any;
    active?: boolean;
}

const SelectPlatform: React.FC<SelectPlatformProps> = ({
    platform,
    handleSelectedPlatform,
    active,
}) => {
    return (
        <div
            onClick={handleSelectedPlatform}
            className={`my-2 mx-5 rounded-2xl cursor-pointer border-2 border-gray-100 p-3 hover:bg-lightGreen ${
                active ? "bg-primaryGreen" : ""
            }`}
        >
            <img
                src={platform.icon ? platform.icon : "/logo.svg"}
                height={75}
                width={75}
                className="mx-auto"
            />
            <h3 className="text-center text-lg mt-2">{platform.name}</h3>
        </div>
    );
};
export default SelectPlatform;
