export type NewsletterPayload = {
    email: string
    website?: string
}

export type NewsletterResponse =
    | { ok: true }
    | { ok: false; error?: string }

function getNewsletterUrl() {
    if (import.meta.env.DEV) return "/api/newsletter.php"
    return "/api/newsletter.php"
}

export async function subscribeNewsletter(payload: NewsletterPayload): Promise<NewsletterResponse> {
    const url = getNewsletterUrl()

    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    })

    const data = (await res.json().catch(() => null)) as NewsletterResponse | null

    if (!res.ok) {
        return data ?? { ok: false, error: `HTTP ${res.status}` }
    }

    return data ?? { ok: false, error: "Invalid server response" }
}