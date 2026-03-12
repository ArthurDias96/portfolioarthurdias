import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "skills", label: "Stacks" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contato" },
];

function Header() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observers = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0.01 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`site-header${scrolled ? " site-header--scrolled" : ""}`}
    >
      <div className="container site-header__inner">
        <a
          href="#hero"
          className="site-header__brand"
          aria-label="Voltar ao início"
        >
          AD
        </a>
        <nav className="site-header__nav" aria-label="Principal">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`site-header__link${
                active === s.id ? " is-active" : ""
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;

