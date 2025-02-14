import { router, usePathname } from "expo-router";
import { createContext, PropsWithChildren, useEffect, useMemo, useState } from "react";
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

interface SessionState {
    user: Record<string, string> | null;
    isAuthenticated: boolean;
}

const defaultSessionState: SessionState = {
    user: null,
    isAuthenticated: false
}

interface SessionContextValues extends SessionState {
    signIn: () => Promise<void>;
    signUp: () => Promise<void>;
    signOut: () => Promise<void>;
}

export const SessionContext = createContext<SessionContextValues>({
    signIn: async () => { },
    signOut: async () => { },
    signUp: async () => { },
    ...defaultSessionState
})

export const SessionProvider = ({ children }: PropsWithChildren) => {
    const [sessionState, setSessionState] = useState<SessionState>(defaultSessionState)

    const asyncStorage = useAsyncStorage("@session");
    const pathName = usePathname();

    useEffect(() => {
        const init = async () => {
            const sessionStored = await asyncStorage.getItem();
            const session = sessionStored ? JSON.parse(sessionStored) as SessionState : null;

            const {
                user = null,
                isAuthenticated = false
            } = session ?? defaultSessionState;

            setSessionState({ user, isAuthenticated });
        }

        init();
    }, [pathName])

    const signIn = async () => {
        const sessionStore = {
            user: {
                name: "Juan Pavas",
                email: "juan.pavas@gmail.com",
                role: "admin",
            },
            isAuthenticated: true,
        };

        setSessionState(sessionStore);

        const session = JSON.stringify(sessionStore);
        await asyncStorage.setItem(session)

        router.replace('/host');
    }

    const signUp = async () => {
        router.replace('/guest');
    }

    const signOut = async () => {
        setSessionState({
            user: null,
            isAuthenticated: false,
        });

        const session = JSON.stringify(defaultSessionState);
        await asyncStorage.setItem(session)
        router.replace('/guest');
    }

    const value = useMemo(() => ({
        ...sessionState,
        signIn,
        signOut,
        signUp,
    }), []);

    return (
        <SessionContext.Provider value={value}>
            {children}
        </SessionContext.Provider>
    )
};

