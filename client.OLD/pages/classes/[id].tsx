import { useRouter } from "next/router";
import ClassesInfo from "../../components/ClassesInfo";
import { Container, PageWrapper, Overlay } from "../../styles/helpers";
import { BannerTutors } from "../tutors/Tutors.styles";

export default function Classes() {
    const router = useRouter();
    const classId = parseInt(router.query.id as string);

    return (
        <PageWrapper pTop="113px">
            <Container>
                <ClassesInfo classId={classId} pageProps={{}} />
            </Container>
        </PageWrapper>
    );
}
