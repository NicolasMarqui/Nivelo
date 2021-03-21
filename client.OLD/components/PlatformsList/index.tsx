import { useAllPlatformsQuery } from "../../generated/graphql";
import { PlatformListWrapper } from "./PlatformList.style";
import ReactTooltip from "react-tooltip";
import IconButton from "../IconButton";
import { BsPlusCircle } from "react-icons/bs";
import { Reoverlay } from "reoverlay";
import PlatformModal from "../Modals/PlatformModal";

interface PlatformListProps {
    user: any;
}

const PlatformList: React.FC<PlatformListProps> = ({ user }) => {
    const [{ data, fetching }] = useAllPlatformsQuery();

    const openPlatformModal = () =>
        Reoverlay.showModal(PlatformModal, {
            userId: user.id,
        });

    return (
        <PlatformListWrapper>
            {fetching ? (
                <p>Carregando</p>
            ) : data && data.allPlatforms ? (
                <>
                    <ul>
                        {data.allPlatforms.map((plat) => (
                            <li key={plat.id}>
                                <div className="plat__item">
                                    <img
                                        src={plat.icon}
                                        data-tip={plat.name}
                                        data-for="platforms"
                                    />
                                    <ReactTooltip id="platforms" />
                                </div>
                            </li>
                        ))}
                        <li>
                            <IconButton
                                smaller
                                icon={<BsPlusCircle size={18} />}
                                text="Adicionar Plataforma"
                                bColor="#FF4338"
                                color="#fff"
                                data-tip="Adicionar Plataforma"
                                onClick={openPlatformModal}
                            />
                            <ReactTooltip />
                        </li>
                    </ul>
                </>
            ) : (
                ""
            )}
        </PlatformListWrapper>
    );
};
export default PlatformList;
