export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        {/* Designed By */}
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Designed by{" "}
          <span className="font-semibold text-slate-900 dark:text-white">
            Akash Krishnan
          </span>
        </p>

        {/* Copyright */}
        <p className="text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
          © {new Date().getFullYear()} Akash Krishnan
          <span className="mx-2 text-slate-300 dark:text-slate-700">|</span>
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
