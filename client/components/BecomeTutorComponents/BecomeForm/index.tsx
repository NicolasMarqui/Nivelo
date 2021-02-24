import Select from "react-select";
import { useAllTypesQuery } from "../../../generated/graphql";
// prettier-ignore
import { Description, FormGroup, FormInput, FormLabel, FormTextArea} from "../../../styles/helpers";
import tutorType from "../../../utils/tutorType.json";
import { BecomeFormArea } from "./BecomeForm.style";

interface BecomeFormProps {}

const BecomeForm: React.FC<BecomeFormProps> = ({}) => {
    const [{ data, fetching }] = useAllTypesQuery();

    return (
        <BecomeFormArea>
            <FormGroup>
                <FormLabel>Descrição</FormLabel>
                <FormTextArea placeholder="Escreva aqui um pouco de você como um tutor" />
            </FormGroup>
            <FormGroup>
                <FormLabel>Tipo de Tutor</FormLabel>
                <Description fontSize="14px" marginTop={10} color="#bbbbb">
                    Aqui você Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Vitae ipsa, reprehenderit repellendus quia consequatur
                    quaerat illum praesentium iste itaque quisquam ipsum saepe
                    provident impedit tempora, corrupti a nihil ut autem?
                </Description>
                <Select
                    closeMenuOnSelect={true}
                    placeholder="Tipo de Tutor"
                    options={
                        data &&
                        data.allTypes.map((dt) => {
                            return {
                                label: dt.name,
                                value: dt.name.toLowerCase(),
                            };
                        })
                    }
                    isLoading={fetching}
                />
            </FormGroup>
        </BecomeFormArea>
    );
};
export default BecomeForm;
