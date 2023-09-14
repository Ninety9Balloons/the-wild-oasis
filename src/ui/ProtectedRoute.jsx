import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
`;

function ProtectedRoute({ children }) {
    const navigate = useNavigate();

    // 1. Load authenticaed user
    const { isAuthenticaed, isLoading } = useUser();

    // 2. If there is NO auth user, redirect to login
    useEffect(
        function () {
            if (!isAuthenticaed && !isLoading) navigate("/login");
        },
        [isAuthenticaed, isLoading, navigate]
    );

    // 3. While loading, show spinner
    if (isLoading) return;
    <FullPage>
        <Spinner />
    </FullPage>;

    // 4. If there IS a user, render the app
    if (isAuthenticaed) return children;
}

export default ProtectedRoute;
