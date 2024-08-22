import { SyntheticEvent, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@/router/consts";
import styles from "./Login.module.scss";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { UserRequest } from "@/types/user";
import { loginUser } from "@/api/user";
import { UserContext } from "@/context/UserContext";
import { AxiosBackendError } from "@/types/error";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const user: UserRequest = { email, password };
    try {
      const response = await loginUser(user);
      login(response);
      navigate(ROUTES.HOME);
    } catch (error) {
      const errorMessage = error as AxiosBackendError;
      setError(errorMessage.response.data.message);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Login</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className={styles.input}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          className={styles.input}
        />
        {error && <p className={styles.error}>{error}</p>}
        <Button type="submit">Log in</Button>
        <div className={styles.link}>
          <Link to={ROUTES.REGISTER} className={styles.signUp}>
            Don't have an account? Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
