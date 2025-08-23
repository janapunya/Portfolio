import React, { useState } from "react";

export default function ContactInfo() {
  const phone = "747786227";
  const email = "punyabratajana022@gmail.com";

  const [toast, setToast] = useState("");

  const showToast = (msg) => {
    setToast(msg);
    window.setTimeout(() => setToast(""), 2600);
  };

  async function copyText(text, label) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      showToast(`${label} copied`);
    } catch (err) {
      showToast("Copy failed");
    }
  }

  function downloadVCard() {
    const name = "Punyabrata Jana";
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${name}`,
      `TEL;TYPE=CELL:${phone}`,
      `EMAIL;TYPE=INTERNET:${email}`,
      "END:VCARD",
    ].join("\n");

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "punyabrata-jana.vcf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showToast("vCard downloaded");
  }

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
      <div className="bg-stone-900/80 rounded-2xl p-5 sm:p-8 shadow-lg">
        <div className="flex flex-col sm:flex-row items-start gap-5">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-lg bg-amber-500 grid place-items-center text-stone-900 font-bold text-lg sm:text-xl">
              PJ
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex-1 w-full">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              Contact
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-300 leading-relaxed">
              You can reach me directly using the phone number or email below. No
              form — just direct contact.
            </p>

            <div className="mt-6 space-y-4">
              {/* Phone */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-stone-800/50 rounded-lg p-3">
                <div className="flex items-center gap-3">
                  <svg
                    className="h-6 w-6 text-amber-400 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 5v4a2 2 0 0 0 2 2h.9a1 1 0 0 1 .9.56L8.6 14.9a15 15 0 0 0 0 0 0 6.5 6.5l2.4-1a1 1 0 0 1 .9-.1H19a2 2 0 0 0 2 2v3"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="min-w-0">
                    <div className="text-xs text-zinc-400">Phone</div>
                    <a
                      href={`tel:${phone}`}
                      className="text-sm sm:text-base text-white font-medium hover:underline break-all"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => (window.location.href = `tel:${phone}`)}
                    className="px-3 py-1 rounded-md bg-amber-500 text-stone-900 text-sm hover:scale-105 transition"
                  >
                    Call
                  </button>
                  <button
                    onClick={() => copyText(phone, "Phone")}
                    className="px-3 py-1 rounded-md border border-zinc-700 text-sm text-zinc-200 hover:bg-zinc-800 transition"
                  >
                    Copy
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-stone-800/50 rounded-lg p-3">
                <div className="flex items-center gap-3">
                  <svg
                    className="h-6 w-6 text-amber-400 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 8.5l8.5 6L20 8.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="16"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                  <div className="min-w-0">
                    <div className="text-xs text-zinc-400">Email</div>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm sm:text-base text-white font-medium hover:underline break-all"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                  <a
                    href={`mailto:${email}`}
                    className="px-3 py-1 rounded-md bg-amber-500 text-stone-900 text-sm hover:scale-105 transition"
                  >
                    Email
                  </a>
                  <button
                    onClick={() => copyText(email, "Email")}
                    className="px-3 py-1 rounded-md border border-zinc-700 text-sm text-zinc-200 hover:bg-zinc-800 transition"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 text-xs sm:text-sm text-zinc-400">
              Note: I prefer direct email or phone. No form — direct contact
              only.
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      <div
        aria-live="polite"
        className={`fixed left-1/2 transform -translate-x-1/2 bottom-6 z-50 transition-all ${
          toast ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-stone-900 text-zinc-100 px-4 py-2 rounded-md shadow-md">
          {toast}
        </div>
      </div>
    </section>
  );
}
