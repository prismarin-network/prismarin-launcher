import {observer} from "mobx-react-lite";
import DefaultLayout from "../layouts/DefaultLayout";
import Link from "next/link"

const IndexPage = observer(() => {

    return (
        <DefaultLayout>
            <Link href="/auth/login">
                Login
            </Link>
        </DefaultLayout>
    )
})

export default IndexPage
