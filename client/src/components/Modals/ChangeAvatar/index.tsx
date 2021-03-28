import { useState } from "react";
import { Reoverlay } from "reoverlay";
import { useChangeAvatarMutation } from "src/generated/graphql";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import toast from "react-hot-toast";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "@utils/createUrqlClient";
import ModalContainer from "../ModalContainer";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { getColor } from "@utils/getColor";

interface ChangeAvatarProps {
    userId: number;
}

const ChangeAvatar: React.FC<ChangeAvatarProps> = ({ userId }) => {
    const [file, setFile] = useState(null);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [, changeAvatar] = useChangeAvatarMutation();

    const handleClose = () => {
        Reoverlay.hideModal();
    };

    const onDrop = (acceptedFiles: any) => {
        // prettier-ignore
        if ( !acceptedFiles || acceptedFiles === [] || acceptedFiles.length === 0){
            setFile('');
            setHasError(true);
            return false;
        }

        setHasError(false);
        setFile(acceptedFiles[0]);
    };

    // prettier-ignore
    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject} = useDropzone({
        onDrop,
        multiple: false,
        accept: 'image/*',
        minSize: 0,
        maxSize: 1048576
    });

    const handleUpload = async () => {
        setIsLoading(true);

        if (!file) {
            setHasError(true);
            setIsLoading(false);
            return false;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", process.env.NEXT_PUBLIC_PRESET_NAME);

        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
            formData
        );

        if (response.data) {
            const saveURLToUser = await changeAvatar({
                id: userId,
                avatar: response.data.url.toString(),
            });

            if (saveURLToUser.data.changeAvatar.errors) {
                setHasError(true);
                setFile(null);
                return false;
            } else {
                toast.success("Avatar alterado com sucesso");
                Reoverlay.hideModal();
            }
        }
    };

    return (
        <ModalContainer>
            <h2 className="text-2xl md:text-3xl font-semibold">Avatar</h2>
            {!isLoading ? (
                <>
                    <div
                        className={`my-5 p-4 border-2 border-dashed ${getColor}`}
                    >
                        <div
                            // prettier-ignore
                            {...getRootProps({ isDragActive, isDragAccept, isDragReject, className: "dropzone"})}
                        >
                            <input
                                {...getInputProps()}
                                className="outline-none"
                            />
                            <p>
                                {file
                                    ? file.path
                                    : "Clique aqui ou arraste sua imagem!"}
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                <LoadingAnimation />
            )}
            {hasError && (
                <p className="my-1 bg-red-200 p-2 text-sm text-black222 text-center">
                    Algo não está certo
                </p>
            )}
            <div className="flex items-center justify-center mt4">
                <button
                    className="w-full p-3 mt-4 bg-primaryGreen text-white rounded shadow hover:bg-lightGreen"
                    onClick={handleUpload}
                >
                    Salvar
                </button>
                <button
                    className="w-full p-3 mt-4 bg-red-400 text-white rounded shadow hover:bg-lightOrange ml-2"
                    onClick={handleClose}
                >
                    Cancelar
                </button>
            </div>
        </ModalContainer>
    );
};
export default withUrqlClient(createUrqlClient)(ChangeAvatar as any);
