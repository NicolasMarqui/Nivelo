import { useRouter } from "next/router";
import ClassesInfo from "../../components/ClassesInfo";

export default function Classes() {
    const router = useRouter();
    const classId = parseInt(router.query.id as string);

    return <ClassesInfo classId={classId} pageProps={{}} />;
}
