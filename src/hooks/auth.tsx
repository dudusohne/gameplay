import React,
{
    createContext,
    ReactNode,
    useContext,
    useState
} from 'react';

type User = {
    id: string;
    username: string;
    firstname: string;
    avatar: string;
    email: string;
    token: string;
}

type AuthContextData = {
    user: User;
}

type AuthProviderProps = {
    children: ReactNode;
}
export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User);

    return (
        <AuthContext.Provider value={{
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}