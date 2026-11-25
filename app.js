(function () {
  'use strict';

  const businesses = {
    terminals: { number: '01 / INFRASTRUCTURE', title: 'Terminal network', shot: 'Wide terminal aerial, storage assets and logistics in context.', description: 'The infrastructure connecting supply with the needs of industry and everyday life.', action: 'Explore terminals & storage', destination: 'Terminals & storage', items: ['Network overview and approved capacity figures', 'Terminal locations and capabilities', 'Storage and distribution services', 'Business enquiry route'] },
    commercial: { number: '02 / BUSINESS ENERGY', title: 'Supporting industry', shot: 'Commercial operations, distribution and the people behind delivery.', description: 'Fuel, gas and energy services supporting businesses and their operations.', action: 'Explore commercial energy', destination: 'Commercial energy', items: ['Commercial fuels and gas', 'Relevant business applications', 'Supply and service capabilities', 'Business enquiry route'] },
    aviation: { number: '03 / SPECIALIST OPERATIONS', title: 'Connecting journeys', shot: 'Aviation fuelling and specialist operational expertise.', description: 'Aviation fuel and the specialist services behind the next departure.', action: 'Explore aviation', destination: 'Aviation', items: ['Aviation-fuel capability', 'Operational expertise and safety', 'Approved network information', 'Specialist enquiry route'] },
    lubricants: { number: '04 / PRODUCTS & MARKETS', title: 'Reaching further', shot: 'Lubricant products, technical applications and international distribution.', description: 'Products, applications and partnerships that introduce Emarat to wider markets.', action: 'Explore lubricants', destination: 'Lubricants', items: ['Product families and applications', 'Approved technical information', 'Markets and distribution partners', 'International partnership enquiries'] },
    retail: { number: '05 / EVERYDAY SERVICES', title: 'Part of everyday life', shot: 'A new station and service shoot focused on customers and daily journeys.', description: 'Stations, services and everyday essentials that keep people moving.', action: 'Explore retail & services', destination: 'Retail & services', items: ['Station and service discovery', 'Car wash and related services', 'Customer products and services', 'Location and contact information'] }
  };

  const outline = (intro, items, note = 'Destination outline for wireframe review. Final page content and naming will be agreed in the inner-page phase.') => '<p>' + intro + '</p><ul class="outline-list">' + items.map(item => '<li>' + item + '</li>').join('') + '</ul><p class="dialog-note">' + note + '</p>';
  const panels = {
    notes: { title: 'One story. Four chapters.', kicker: 'REVIEW NOTES / STRUCTURE FIRST', html: '<p>This wireframe translates the latest meeting brief into a concise, light homepage. The visual frames show placement and shot intent; they are not final photography or video.</p><h3>The opening 30-second story</h3><ol><li><strong>Energy company:</strong> lead with terminals, operations and people.</li><li><strong>Connected strength:</strong> show approved scale indicators, then the breadth of the businesses.</li><li><strong>Heritage:</strong> connect authentic archive material to present-day capability.</li><li><strong>Responsibility:</strong> introduce real environmental, resource and safety practices.</li></ol><h3>Audience access</h3><ul><li><strong>Customers:</strong> Find a station in the header; retail and services within Businesses.</li><li><strong>Suppliers:</strong> Supplier registration in the utility navigation; existing portal access through Login.</li><li><strong>UAE and international investors:</strong> Investors in the main navigation and a contextual route after business scale.</li><li><strong>Job seekers:</strong> Careers in the main navigation; detailed HR content on inner pages.</li></ul><h3>The small creative idea</h3><p>A fine connecting line sits beneath the business choices. Selection highlights that part of the line and changes one shared visual and short explanation. It is a graphic device, not a literal supply-chain map. There is no automatic rotation or scroll trapping.</p><h3>Navigation and mobile</h3><p>Health, Safety &amp; Environment sits under Sustainability, with cross-links from Businesses and supplier information. On mobile, only the logo, Find a station and menu remain in the header. The production Arabic layout should mirror the logo and navigation alignment.</p><h3>Content needed for approval</h3><ul><li>Three scale figures with units, definitions and reporting dates.</li><li>Founding date and two further significant milestones.</li><li>Authentic dated archive images and new terminal, operational and people footage.</li><li>Documented sustainability examples and approved investor content.</li></ul><h3>Optional workstreams</h3><p>Personalisation, a content-based AI assistant, an assisted location finder, analytics and GEO remain separate scope items. This wireframe does not present them as working services.</p><p class="dialog-note">The 30-second objective guides message density. Understanding the core story must not depend on watching the film or interacting with the tabs. Proposed creative copy is for review.</p>' },
    film: { title: 'Open on energy infrastructure.', kicker: 'PROPOSED HERO FILM / SHOT DIRECTION', html: '<p>A short sequence should introduce the company before visitors begin to scroll. The headline and company message remain readable outside the film.</p><ol><li><strong>Opening:</strong> a wide view of terminal infrastructure, storage and the operating environment.</li><li><strong>Capability:</strong> controlled movement through a real distribution or commercial operation.</li><li><strong>People:</strong> an Emarat professional within that operation, connecting scale to expertise.</li></ol><h3>Production requirements</h3><ul><li>Plan one wide desktop composition and a separately composed mobile crop.</li><li>Use authentic Emarat footage with space for different responsive crops.</li><li>Provide a strong static poster so the opening works before video loads.</li><li>Keep playback muted with a visible pause control; use the poster for reduced-motion preferences.</li></ul><p class="dialog-note">No film is embedded in this wireframe. The rectangle reserves the media placement and opens this storyboard.</p>' },
    about: { title: 'About Emarat', html: outline('The full company story continues here.', ['Company introduction and purpose', 'History and significant milestones', 'Leadership and governance', 'Operating experience and partnerships']) },
    investors: { title: 'Investor information', html: outline('A clear company-information route for UAE and international investors.', ['Company overview and approved scale indicators', 'Businesses, operating network and markets', 'Leadership and governance', 'Approved reports and disclosures, where available', 'Partnership and corporate enquiry route'], 'This outline does not imply a securities offering, a specific investment opportunity or an existing investor-relations service.') },
    sustainability: { title: 'Sustainability', html: outline('One home for the approach, evidence and responsible operating practices.', ['Sustainability approach and priorities', 'Resources: water and energy', 'Environment: documented initiatives and practices', 'Health, Safety & Environment', 'Approved reports and supporting information']) },
    hse: { title: 'Health, Safety & Environment', html: outline('Recommended location: Sustainability → Health, Safety & Environment.', ['Health and safety approach', 'Environmental operating practices', 'Relevant policies and documents', 'Contractor and supplier requirements'], 'Cross-link this page from Businesses and Supplier Registration so users can reach operational requirements from their own journey.') },
    suppliers: { title: 'Work with Emarat', html: outline('A direct route for prospective suppliers and existing supplier relationships.', ['Registration requirements and process', 'Supplier registration entry', 'Existing supplier portal', 'Relevant HSE and procurement information']) + '<a class="dialog-link" href="https://www.emarat.ae/vendors/" target="_blank" rel="noopener">Open current supplier information</a>' },
    finder: { title: 'Find a station or service', html: outline('Customer access remains immediate, even with an infrastructure-led homepage.', ['Search by location or area', 'Filter by service, including car wash', 'Station details and opening information', 'Directions and contact details'], 'Location search is a planned destination. An AI-assisted nearest-service feature would be scoped separately.') + '<a class="dialog-link" href="https://www.emarat.ae/individuals/service-stations/find-service-station/" target="_blank" rel="noopener">Open current station finder</a>' },
    login: { title: 'Choose your portal', html: outline('Keep existing service access in one concise utility destination.', ['Customer portal', 'Supplier portal', 'Other approved business portals'], 'Portal names and destinations will be confirmed during implementation. This wireframe does not collect credentials.') },
    contact: { title: 'Contact Emarat', html: outline('Route enquiries by purpose so visitors reach the appropriate team.', ['Customer services', 'Business and product enquiries', 'Supplier enquiries', 'Corporate and partnership enquiries']) + '<a class="dialog-link" href="https://www.emarat.ae/contact-us/" target="_blank" rel="noopener">Open current contact page</a>' },
    media: { title: 'Media', html: outline('Give corporate updates a clear destination without extending the main homepage story.', ['Latest news', 'Media releases', 'Approved image and video resources', 'Media enquiries']) },
    careers: { title: 'Careers', html: outline('Make career content useful and quick to navigate.', ['Working at Emarat', 'Career opportunities', 'Application route', 'Relevant people and culture stories'], 'Detailed HR content belongs here. The homepage should not require visitors to scroll through long employment content.') },
    language: { title: 'Arabic experience', html: '<p>The production Arabic homepage should mirror the grid, place the logo on the right and preserve the same four-chapter story.</p><ul><li>Localised copy and suitable Arabic typography.</li><li>Mirrored navigation and directional controls.</li><li>Equivalent investor, supplier and customer routes.</li><li>Media crops checked separately for the Arabic layout.</li></ul><p class="dialog-note">This review wireframe is in English. It does not switch to a translated page.</p>' },
    privacy: { title: 'Privacy', html: outline('Reserved for approved privacy information and relevant settings.', ['Privacy notice', 'Cookie information and settings', 'Personal-data contact route'], 'Final privacy content depends on the approved analytics and optional AI scope.') },
    search: { title: 'Search Emarat', kicker: 'WIREFRAME / SEARCH THE PROPOSED STRUCTURE', html: '<label class="search-label" for="site-search">Find a business, service or topic</label><input id="site-search" type="search" placeholder="Try terminals, investors or HSE" autocomplete="off"><ul id="search-results" class="search-results" aria-live="polite"></ul><p class="dialog-note">This prototype searches the proposed navigation and page outlines.</p>' }
  };
  const dialog = document.getElementById('review-dialog');
  const dialogTitle = document.getElementById('dialog-title');
  const dialogContent = document.getElementById('dialog-content');
  const dialogKicker = document.getElementById('dialog-kicker');
  const menu = document.getElementById('mobile-menu');
  const menuToggle = document.getElementById('menu-toggle');
  let lastTrigger;

  function setMenu(open) {
    menu.hidden = !open;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  function openPanel(key, trigger) {
    let panel = panels[key];
    if (key.startsWith('business-')) {
      const b = businesses[key.slice(9)];
      if (b) panel = { title: b.destination, html: outline('Proposed business landing-page content.', b.items) };
    }
    if (!panel) return;
    if (!dialog.open) lastTrigger = trigger || document.activeElement;
    setMenu(false);
    dialogTitle.textContent = panel.title;
    dialogKicker.textContent = panel.kicker || 'WIREFRAME / DESTINATION OUTLINE';
    dialogContent.innerHTML = panel.html;
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    if (key === 'search') setupSearch();
    else dialogTitle.focus({ preventScroll: true });
  }

  document.addEventListener('click', function (event) {
    const trigger = event.target.closest('[data-panel]');
    if (trigger) openPanel(trigger.dataset.panel, trigger);
  });
  document.getElementById('dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', function (event) {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
  dialog.addEventListener('close', function () {
    if (lastTrigger && lastTrigger.getClientRects().length) lastTrigger.focus();
    else menuToggle.focus();
  });
  menuToggle.addEventListener('click', () => setMenu(menu.hidden));
  menu.addEventListener('click', function (event) { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !menu.hidden && !dialog.open) { setMenu(false); menuToggle.focus(); }
  });
  document.addEventListener('click', function (event) {
    if (!menu.hidden && !menu.contains(event.target) && !menuToggle.contains(event.target)) setMenu(false);
  });
  window.addEventListener('resize', function () { if (window.innerWidth > 950 && !menu.hidden) setMenu(false); }, { passive: true });

  const tabs = Array.from(document.querySelectorAll('[data-business]'));
  const stage = document.getElementById('business-stage');
  function selectBusiness(tab, focus) {
    const key = tab.dataset.business;
    const b = businesses[key];
    tabs.forEach(item => { const active = item === tab; item.setAttribute('aria-selected', String(active)); item.tabIndex = active ? 0 : -1; });
    stage.setAttribute('aria-labelledby', tab.id);
    document.getElementById('business-visual-number').textContent = b.number;
    document.getElementById('business-visual-label').textContent = b.title;
    document.getElementById('business-shot').textContent = b.shot;
    document.getElementById('business-description').textContent = b.description;
    document.querySelector('.business-visual').dataset.active = key;
    const detail = document.getElementById('business-detail');
    detail.dataset.panel = 'business-' + key;
    detail.replaceChildren(document.createTextNode(b.action + ' '));
    const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); arrow.setAttribute('class', 'icon-arrow'); arrow.setAttribute('aria-hidden', 'true'); arrow.setAttribute('width', '16'); arrow.setAttribute('height', '16'); arrow.setAttribute('viewBox', '0 0 16 16');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path'); path.setAttribute('d', 'M3 13 13 3M3 3h10v10'); path.setAttribute('fill', 'none'); path.setAttribute('stroke', 'currentColor'); path.setAttribute('stroke-width', '1.3'); arrow.appendChild(path); detail.appendChild(arrow);
    if (focus) tab.focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectBusiness(tab, false));
    tab.addEventListener('keydown', function (event) {
      let next;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + tabs.length - 1) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault(); selectBusiness(tabs[next], true);
    });
  });

  const searchItems = [
    { title: 'Terminals & storage', description: 'Infrastructure, network and storage capability', panel: 'business-terminals' },
    { title: 'Commercial energy', description: 'Commercial fuels, gas and business services', panel: 'business-commercial' },
    { title: 'Aviation', description: 'Aviation fuel and specialist operations', panel: 'business-aviation' },
    { title: 'Lubricants', description: 'Products, applications and international markets', panel: 'business-lubricants' },
    { title: 'Find a station or car wash', description: 'Customer locations and services', panel: 'finder' },
    { title: 'Investor information', description: 'Company, governance and partnerships', panel: 'investors' },
    { title: 'Supplier registration', description: 'Working with Emarat and portal access', panel: 'suppliers' },
    { title: 'Sustainability', description: 'Resources and the environment', panel: 'sustainability' },
    { title: 'Health, Safety & Environment', description: 'HSE and operational responsibility', panel: 'hse' },
    { title: 'About Emarat', description: 'History, heritage and company information', panel: 'about' },
    { title: 'Careers', description: 'Jobs and working at Emarat', panel: 'careers' }
  ];
  function setupSearch() {
    const input = document.getElementById('site-search');
    const results = document.getElementById('search-results');
    function render() {
      const query = input.value.trim().toLowerCase();
      const matches = searchItems.filter(item => (item.title + ' ' + item.description).toLowerCase().includes(query));
      results.replaceChildren();
      matches.slice(0, 6).forEach(item => {
        const li = document.createElement('li');
        const button = document.createElement('button'); button.type = 'button'; button.dataset.panel = item.panel;
        const title = document.createElement('strong'); title.textContent = item.title;
        const description = document.createElement('span'); description.textContent = item.description;
        button.append(title, description); li.appendChild(button); results.appendChild(li);
      });
      if (!matches.length) { const li = document.createElement('li'); li.className = 'empty-search'; li.textContent = 'No matching topic. Try a business name, service or audience.'; results.appendChild(li); }
    }
    input.addEventListener('input', render); render(); input.focus();
  }
})();
