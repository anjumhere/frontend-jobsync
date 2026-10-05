import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { api } from "../lib/api";
import type { ApiResponse, User } from "../types";

type Ctx = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (form: FormData) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<Ctx>(null!);
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = () =>
    api
      .get<ApiResponse<User>>("/users/current-user")
      .then((r) => setUser(r.data.data));

  useEffect(() => {
    fetchUser()
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const login = async (email: string, password: string) => {
    await api.post("/users/login", { email, password });
    await fetchUser();
  };
  const register = async (form: FormData) => {
    await api.post("/users/register", form);
    await login(String(form.get("email")), String(form.get("password")));
  };
  const logout = async () => {
    await api.post("/users/logout").catch(() => {});
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
