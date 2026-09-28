(() => {
  setTimeout(() => {
  const path = location.pathname.replace(/\/+$/, "") || "/";
  const posts = [
    ["monoglass-product-storage-and-jobsite-planning","Monoglass product storage and jobsite planning","Bagged material, equipment, access and protection."],
    ["repairing-damaged-monoglass-insulation","Repairing damaged Monoglass insulation","Diagnose moisture, impact and compatibility first."],
    ["hibar-fireproofing-repair-after-trade-damage","HiBar repair after trade damage","Restore the specified passive fire-protection assembly."],
    ["epoxy-garage-floor-preparation-checklist","Epoxy garage floor preparation checklist","Moisture, cracks, contamination and profiling."],
  ];
  const img = (src, alt) => `<img src="${src}" alt="${alt}" loading="lazy">`;
  if (path === "/") {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    section.className = "standard-blog-carousel";
    section.innerHTML = `<p class="legacy-eye">Latest technical guides</p><h2>Plan the system before the application.</h2><div class="blog-track">${posts.map(([s,t,d])=>`<a href="/guides/${s}/"><span>Field guide</span><h3>${t}</h3><p>${d}</p><b>Read guide →</b></a>`).join("")}</div><a class="all-guides" href="/guides/">Browse technical guides →</a>`;
    const cta = main?.querySelector(".cta");
    if (main) main.insertBefore(section, cta || null);
  }
  if (path === "/guides") {
    const main = document.querySelector("main");
    if (main) {
      const section = document.createElement("section");
      section.className = "standard-blog-carousel";
      section.innerHTML = `<p class="legacy-eye">Legacy systems and repair planning</p><h2>Insulation, fireproofing and floor guides</h2><div class="blog-track">${posts.map(([slug,title,desc])=>`<a href="/guides/${slug}/"><h3>${title}</h3><p>${desc}</p><b>Read guide →</b></a>`).join("")}</div>`;
      main.append(section);
    }
  }

    const main = document.querySelector("main");
    if (!main) return;
    const legacy = document.createElement("section");
    legacy.className = "corrected-service-showcase";
    legacy.innerHTML = `<p class="legacy-eye">Legacy systems + correct visual references</p><h2>Commercial systems and application planning.</h2><div class="corrected-grid">
      <a href="/services/monoglass-insulation/">${img('/img/legacy-matched/monoglass.jpg','White-grey overhead Monoglass archive photograph; annotation removed')}<h3>Monoglass insulation</h3><p>WeSprayIt.ca archive photograph; white annotation removed.</p></a>
      <a href="/services/hibar-fireproofing/">${img('/img/generated/hibar-fireproofing-application.jpg','AI-generated illustration of overhead fireproofing work from a scissor lift')}<h3>HiBar fireproofing</h3><p>AI-generated application illustration.</p></a>
      <a href="/services/industrial-coatings-legacy/">${img('/img/projects/archive-19.jpg','Original commercial job-site photograph showing two scissor lifts')}<h3>Commercial overhead work</h3><p>Original job-site archive showing elevated access and working scale.</p></a>
      <a href="/services/industrial-coatings-legacy/">${img('/img/generated/epoxy-garage-floor.jpg','Representative completed grey epoxy garage floor')}<h3>Industrial coatings</h3><p>Garage, retail and light-industrial floor applications.</p></a>
    </div>`;
    main.append(legacy);
  }
  }, 800);
})();
