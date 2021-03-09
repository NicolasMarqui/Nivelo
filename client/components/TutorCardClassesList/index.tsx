import ClassItem from "../ClassItem";
import { TutorCardClassesListWrapper } from "./TutorCardClassesList.style";

interface ClassesContent {
    id: number;
    amountTimeTaught: number;
    description: string;
    name: string;
    active: boolean;
    price: [{ id: number; price: number; time: number }] | null;
}

interface TutorCardClassesListProps {
    classes: ClassesContent[];
}

export default function TutorCardClassesList({
    classes,
}: TutorCardClassesListProps) {
    return (
        <TutorCardClassesListWrapper>
            {classes && classes.length > 0 ? (
                classes
                    .filter((clas) => clas.active)
                    .map((clasF) => (
                        <ClassItem
                            key={clasF.id}
                            smaller={true}
                            class={clasF}
                        />
                    ))
            ) : (
                <h5>Nenhuma aula disponivel!</h5>
            )}
        </TutorCardClassesListWrapper>
    );
}
