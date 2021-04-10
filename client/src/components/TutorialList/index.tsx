interface TutorialListProps {}

const tutorialInfo = [
    {
        id: 1,
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
        id: 2,
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
        id: 3,
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
];

const TutorialList: React.FC<TutorialListProps> = ({}) => {
    return (
        <div className="mt-4">
            {tutorialInfo.map((tut) => (
                <div
                    className="flex items-center flex-col md:flex-row my-6"
                    key={tut.id}
                >
                    <div className="flex-none w-20 h-20 bg-primaryOrange rounded-full flex items-center justify-center">
                        <p className="text-white text-4xl font-bold">
                            {tut.id}
                        </p>
                    </div>
                    <div className="flex-1 mt-4 md:mt-0 md:ml-5">
                        <p className="text-center md:text-left text-gray-400">
                            {tut.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default TutorialList;
