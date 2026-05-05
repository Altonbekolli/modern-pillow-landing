export type ContactStatus = "idle" | "loading" | "success" | "error";

export type ContactFormCardProps = {
    style: import("./css").CSSVar<"--i">;

    name: string;
    email: string;
    message: string;

    setName: (v: string) => void;
    setEmail: (v: string) => void;
    setMessage: (v: string) => void;

    onSubmit: (e: React.FormEvent) => void;

    status: ContactStatus;
    errorMsg: string;
};