export default function Footer() {
    return (
        <footer className="bg-[var(--bg-secondary)] py-8 border-t border-[var(--border-primary)]">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-xl font-bold font-display">CieloMagia</div>
                <div className="text-sm text-[var(--text-muted)]">
                    &copy; {new Date().getFullYear()} CieloMagia Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
