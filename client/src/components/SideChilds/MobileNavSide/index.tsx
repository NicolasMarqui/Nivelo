import Menu from "@components/Menu";
import Image from "next/image";

interface MobileNavSideProps {}

const MobileNavSide: React.FC<MobileNavSideProps> = ({}) => {
    return (
        <div className="flex flex-col">
            <Image src="/logo.svg" width={170} height={50} />

            <div className="mt-3">
                <Menu />
            </div>
        </div>
    );
};
export default MobileNavSide;
