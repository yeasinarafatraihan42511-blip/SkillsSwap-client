

// "use client";
// import { authClient } from "@/lib/auth-client";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";
// import Link from "next/link";
// import {
//   Button,
//   Card,
//   Form,
//   Input,
//   Label,
//   TextField,
// } from "@heroui/react";

// export default function RegisterPage() {
//   const router = useRouter();

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const name = form.name.value;
//     const image = form.image.value;
//     const email = form.email.value;
//     const password = form.password.value;

//     const { error } = await authClient.signUp.email({
//       name,
//       image,
//       email,
//       password,
//       callbackURL: "/login",
//     });

//     if (error) {
//       toast.error("Registration failed");
//     } else {
//       toast.success("Registration successful");
//       form.reset(); 
//       router.push("/login");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-yellow-50">
//       <Card className="w-[380px] p-8 shadow-lg rounded-xl">

//         <h1 className="text-2xl font-bold text-center mb-6">
//           Create Account 🚀
//         </h1>

//         <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
//           <TextField isRequired name="name">
//             <Label>Name</Label>
//             <Input placeholder="Your name" />
//           </TextField>

         

//           <TextField isRequired name="email" type="email">
//             <Label>Email</Label>
//             <Input placeholder="john@example.com" />
//           </TextField>

//           <TextField isRequired name="password" type="password">
//             <Label>Password</Label>
//             <Input placeholder="Enter password" />
//           </TextField>

//           <Button type="submit" className="bg-blue-600 text-white">
//             Register
//           </Button>
//         </Form>

//         <p className="text-sm text-center mt-4">
//           Already have an account?{" "}
//           <Link href="/login" className="underline font-medium">
//             Login
//           </Link>
//         </p>
//       </Card>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    
    email: "",
    password: "",
    role: "client",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const { name, image, email, password } = formData;

    const { error } = await authClient.signUp.email({
      name,
     
      email,
      password,
      callbackURL: "/login",
    });

    if (error) {
      toast.error(error.message || "Registration failed");
      return;
    }

    toast.success("Registration successful");
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

        <form onSubmit={onSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            required
          />

        

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            required
          />

          {/* Assignment 10 Role Selection */}
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          >
            <option value="client">Client</option>
            <option value="freelancer">Freelancer</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-5">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}