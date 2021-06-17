import EmptyAnimation from "@components/UI/EmptyAnimation";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { PlatformProps, TutorProps } from "@types";
import { createUrqlClient } from "@utils/createUrqlClient";
import { withUrqlClient } from "next-urql";
import { useState } from "react";
import { Reoverlay } from "reoverlay";
import {
    useAllPlatformsQuery,
    useAddPlatformUserMutation,
    useRemovePlatformUserMutation,
} from "src/generated/graphql";
import ModalContainer from "../ModalContainer";
import { FcApproval } from "react-icons/fc";
import { FaTimesCircle } from "react-icons/fa";
import toast from "react-hot-toast";

interface AddPlatformProps {
    userID: number;
    platforms: PlatformProps[];
}

const AddPlatform: React.FC<AddPlatformProps> = ({ userID, platforms }) => {
    const [{ data, fetching }] = useAllPlatformsQuery();
    const [{ fetching: fetAdd }, addPlatform] = useAddPlatformUserMutation();
    const [{ fetching: fetRem }, removePlatform] =
        useRemovePlatformUserMutation();

    const [allIds, setAllIds] = useState(
        platforms.map((plat) => plat.platform.id)
    );

    const checkIfHasPLatform = (currPlat) => {
        if (allIds.includes(currPlat.id)) {
            return {
                has: true,
            };
        } else {
            return { has: false };
        }
    };

    const handleClick = async (has: boolean, platformID: number) => {
        if (has) {
            const respRemove = await removePlatform({ userID, platformID });
            if (respRemove) {
                toast.success("Plataform removida");
                setAllIds(allIds.filter((ids) => ids !== platformID));
            } else {
                toast.error("Algo de errado...");
            }
        } else {
            const respAdd = await addPlatform({
                userID,
                platformID,
                userAccount: "",
            });
            if (respAdd) {
                toast.success("Plataform adicionada");
                setAllIds([...allIds, platformID]);
            } else {
                toast.error("Algo de errado...");
            }
        }
    };

    return (
        <ModalContainer>
            <h2 className="text-2xl md:text-3xl font-semibold dark:text-black222">
                Suas Plataformas
            </h2>

            <p className="mt-2 text-desc text-center md:text-left">
                Clique para ativar/desativar a plataforma
            </p>

            <div className="my-4 w-full">
                {fetching || fetAdd || fetRem ? (
                    <LoadingAnimation />
                ) : data ? (
                    <div className="flex flex-col md:flex-row">
                        {data.allPlatforms.map((plat) => (
                            <div
                                key={plat.id}
                                className={`flex flex-col items-center relative shadow-sm mx-3 p-2 cursor-pointer hover:scale-105 hover:shadow-md transform`}
                                onClick={() =>
                                    handleClick(
                                        checkIfHasPLatform(plat).has,
                                        plat.id
                                    )
                                }
                            >
                                <img
                                    src={plat.icon}
                                    alt={plat.name}
                                    className="h-20 w-20"
                                />

                                <h3 className="my-2 dark:text-black222">
                                    {plat.name}
                                </h3>

                                <div className="mt-2">
                                    {checkIfHasPLatform(plat).has ? (
                                        <FcApproval />
                                    ) : (
                                        <FaTimesCircle
                                            size={20}
                                            color="#fb475e"
                                        />
                                    )}
                                </div>
                                {/* <input
                                    type="text"
                                    name={`account-${plat.id}`}
                                    id={plat.id.toString()}
                                    value={checkIfHasPLatform(plat).account}
                                    placeholder="Seu usuário"
                                    className="border-2 border-gray-50 ml-4 p-2 focus:border-orange"
                                    onChange={handleChange}
                                /> */}
                            </div>
                        ))}
                    </div>
                ) : (
                    <EmptyAnimation />
                )}
            </div>

            <button
                className="w-full p-3 mt-4 bg-red-400 text-white rounded shadow hover:bg-red-200"
                onClick={() => Reoverlay.hideModal()}
            >
                Fechar
            </button>
        </ModalContainer>
    );
};
export default withUrqlClient(createUrqlClient)(AddPlatform as any);
