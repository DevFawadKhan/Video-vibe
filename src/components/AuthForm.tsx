import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "../firebaseconfig.js";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import Index from "@/pages/Index.js";
export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const handleSubmit =async(e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential)
      console.log(user);
        alert("Login successful!");
        setEmail("");
        setPassword("");
        
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('Signed up user:', userCredential.user);
        alert("Signup successful!");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      alert(error.message);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
    <Card className="w-[350px] bg-card/50 backdrop-blur-md">
      <CardHeader>
        <CardTitle>{isLogin ? "Welcome Back" : "Create Account"}</CardTitle>
        <CardDescription>
          {isLogin ? "Enter your credentials to continue" : "Sign up for a new account"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-secondary"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-secondary"
          />
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            {isLogin ? "Login" : "Sign Up"}
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="w-full"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
          </Button>
        </form>
      </CardContent>
    </Card>    
    </>

  );
}