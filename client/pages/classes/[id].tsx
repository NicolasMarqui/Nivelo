import { useRouter } from "next/router";
import ClassesInfo from "../../components/ClassesInfo";
import { Container, PageWrapper } from "../../styles/helpers";

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
