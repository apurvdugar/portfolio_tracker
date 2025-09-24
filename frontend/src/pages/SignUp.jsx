import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "@radix-ui/themes";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  return (
    <>
      <Card>
        <h2>Sign Up</h2>
      </Card>
    </>
  );
};

export default SignUp;
