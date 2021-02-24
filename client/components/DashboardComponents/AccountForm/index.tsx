import { AccountFormWrapper } from "./AccountForm.style";
// prettier-ignore
import { FormFull, FormGroup, FormLabel, FormInput, FormTextArea} from "../../../styles/helpers";

interface AccountFormProps {}

const AccountForm: React.FC<AccountFormProps> = ({}) => {
    return (
        <AccountFormWrapper>
            <FormFull>
                <FormGroup>
                    <FormLabel>Nome</FormLabel>
                    <FormInput placeholder="Seu nome" />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Descrição</FormLabel>
                    <FormTextArea placeholder="Sua descrição" />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Data de nascimento</FormLabel>
                </FormGroup>
            </FormFull>
        </AccountFormWrapper>
    );
};
export default AccountForm;
