import Link from "next/link";
export function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) { return <div className="section-title"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p>{text}</p>}</div>; }
export function Placeholder({ label, className = "" }: { label: string; className?: string }) { return <div className={`placeholder ${className}`} role="img" aria-label={label}><span>IMAGE PLACEHOLDER</span><strong>{label}</strong><small>Replace with approved original product photography</small></div>; }
export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) { return <Link className="arrow-link" href={href}>{children} <span>→</span></Link>; }
