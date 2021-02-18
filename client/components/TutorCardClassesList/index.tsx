import ClassItem from "../ClassItem";
import { TutorCardClassesListWrapper } from "./TutorCardClassesList.style";

interface ClassesContent {
    id: number;
    amountTimeTaught: number;
    description: string;
    name: string;
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
                classes.map((clas) => <ClassItem smaller={true} class={clas} />)
            ) : (
                <h5>Nenhuma aula disponivel!</h5>
            )}
        </TutorCardClassesListWrapper>
    );
}
