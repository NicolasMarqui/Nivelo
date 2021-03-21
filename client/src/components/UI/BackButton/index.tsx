import { useRouter } from "next/router";

interface BackButtonProps {}

const BackButton: React.FC<BackButtonProps> = ({}) => {
    const router = useRouter();

    return (
        <div
            className="flex items-center justify-center w-12 bg-white rounded-3xl cursor-pointer group hover:bg-lightOrange"
            onClick={() => router.back()}
        >
            <p className="text-base font-bold text-black222 group-hover:text-white">
                Voltar
            </p>
        </div>
    );
};
export default BackButton;
