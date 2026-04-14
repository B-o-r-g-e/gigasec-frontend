import {Suspense} from "react";
import AuthPage from "@/app/(auth)/login/components/authPage";

export default function LoginPage() {
    return (
        <Suspense fallback={<div />}>
            <AuthPage />
        </Suspense>
    )
}
