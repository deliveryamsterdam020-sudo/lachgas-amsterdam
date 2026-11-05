"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

// The homepage warning as a modal popup the visitor has to click away. It uses the native
// <dialog>: focus stays inside, the page behind is inert, and Escape also closes it.
// After it is dismissed, sessionStorage remembers that until the tab is closed, so the
// popup does not return on every visit to the homepage. Nothing is sent anywhere.

const KEY = "alarm-dismissed";

export function AlarmPopup({ children, ack, close }: { children: ReactNode; ack: string; close: string }) {
  const ref = useRef<HTMLDialogElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog || typeof dialog.showModal !== "function") return;
    try {
      if (window.sessionStorage.getItem(KEY)) return;
    } catch {
      // Storage unavailable (private mode, blocked): just show the popup.
    }
    // A short pause so the hero is painted first.
    const id = window.setTimeout(() => {
      dialog.showModal();
      // Focus the card itself, not the first button, so no focus ring shows on opening;
      // keyboard users Tab to the close button, the links and the confirm button from here.
      bodyRef.current?.focus({ preventScroll: true });
      document.documentElement.classList.add("alarm-open");
    }, 450);
    return () => window.clearTimeout(id);
  }, []);

  const dismiss = () => {
    const dialog = ref.current;
    if (!dialog?.open) return;
    try {
      window.sessionStorage.setItem(KEY, "1");
    } catch {}
    const finish = () => {
      dialog.close();
      dialog.removeAttribute("data-closing");
      document.documentElement.classList.remove("alarm-open");
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return finish();
    dialog.setAttribute("data-closing", "");
    window.setTimeout(finish, 200);
  };

  return (
    <dialog
      id="alarm-dialog"
      ref={ref}
      aria-labelledby="alarm-title"
      aria-describedby="alarm-text"
      className="alarm-dialog"
      onCancel={(e) => {
        e.preventDefault();
        dismiss();
      }}
      // Following one of the links also counts as having seen the warning.
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("a")) dismiss();
      }}
    >
      <div ref={bodyRef} tabIndex={-1} className="alarm-dialog__body" data-lenis-prevent>
        <button type="button" onClick={dismiss} aria-label={close} className="alarm-dialog__close">
          <X aria-hidden="true" className="size-[18px]" strokeWidth={2.4} />
        </button>
        {children}
        <button type="button" onClick={dismiss} className="alarm-dialog__ack">
          {ack}
        </button>
      </div>
    </dialog>
  );
}
