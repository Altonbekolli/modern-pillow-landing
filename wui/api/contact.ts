export type ContactPayload = {
    name: string;
    email: string;
    message: string;
    website?: string;
};

export type ContactResponse =
    | { ok: true }
    | { ok: false; error?: string };

function getContactUrl() {
    if (import.meta.env.DEV) return "/api/contact.php";
    return "/api/contact.php";
}

export async function sendContact(payload: ContactPayload): Promise<ContactResponse> {
    const url = getContactUrl();

    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    const data = (await res.json().catch(() => null)) as ContactResponse | null;

    if (!res.ok) {
        return data ?? { ok: false, error: `HTTP ${res.status}` };
    }

    return data ?? { ok: false, error: "Invalid server response" };
}