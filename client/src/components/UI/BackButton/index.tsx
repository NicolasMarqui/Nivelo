import { useRouter } from "next/router";

interface BackButtonProps {}

const BackButton: React.FC<BackButtonProps> = ({}) => {
    const router = useRouter();

    return (
        <div
            className="flex items-center justify-center w-16 bg-white cursor-pointer group hover:bg-lightOrange px-7 py-1 mb-2"
            onClick={() => router.back()}
        >
            <p className="text-xs font-bold text-black222 group-hover:text-white">
                Voltar
            </p>
        </div>
    );
};
export default BackButton;
