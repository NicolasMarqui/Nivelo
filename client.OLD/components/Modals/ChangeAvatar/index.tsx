import { useState } from "react";
import "../../../node_modules/reoverlay/lib/ModalWrapper.css";
import { ModalWrapper, Reoverlay } from "reoverlay";
import { TutorTitle } from "../../TutorCard/TutorCard.style";
// prettier-ignore
import { DropContainer, DropFilesMessage, ModalContainer} from "../Modals.style";
// prettier-ignore
import { Alert, AnimationWrapper, Button, Description, Flex} from "../../../styles/helpers";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { useChangeAvatarMutation } from "../../../generated/graphql";
import toast from "react-hot-toast";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../../utils/createUrqlClient";
import Lottie from "react-lottie";
import LoadingAnimation from "../../LoadingAnimation";

interface ChangeAvatarModalProps {
    userId: number;
}

const ChangeAvatarModal: React.FC<ChangeAvatarModalProps> = ({ userId }) => {
    const [file, setFile] = useState(null);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [, changeAvatar] = useChangeAvatarMutation();

    const LOADING__ANIMATION = require("../../../public/assets/animations/loading.json");

    const closeModal = () => {
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
        <ModalWrapper>
            <ModalContainer>
                <TutorTitle>Avatar</TutorTitle>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur, saepe.
                </Description>
                {!isLoading ? (
                    <>
                        <DropContainer>
                            <div
                                // prettier-ignore
                                {...getRootProps({ isDragActive, isDragAccept, isDragReject, className: "dropzone"})}
                            >
                                <input {...getInputProps()} />
                                <p>
                                    {file
                                        ? file.path
                                        : "Clique aqui ou arraste sua imagem!"}
                                </p>
                            </div>
                        </DropContainer>
                        <DropFilesMessage>
                            Tamanho máximo da imagem: <span>1mb</span>
                        </DropFilesMessage>
                    </>
                ) : (
                    <LoadingAnimation />
                )}
                {hasError && (
                    <Alert bgColor="#fb475e">Algo não está certo.....</Alert>
                )}
                {/* prettier-ignore */}
                <Flex justifyCenter>
                    <Button onClick={handleUpload} width="100px" margin="10px" bgColor="#57CC99" color="#fff" notActive={hasError || !file}>
                        Salvar
                    </Button>
                    {/* prettier-ignore */}
                    <Button onClick={closeModal} width="100px" margin="10px" bgColor="#fb475e" color="#fff">
                        Cancelar
                    </Button>
                </Flex>
            </ModalContainer>
        </ModalWrapper>
    );
};
export default withUrqlClient(createUrqlClient)(ChangeAvatarModal as any);
