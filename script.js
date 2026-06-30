const phone = '+16477059007';
const whatsappMessage = encodeURIComponent('Hi Benn, I want to discuss real estate in the GTA.');

const listings = [
  {
    title: '11 Yorkville Ave, Toronto, ON',
    price: '$1,550,000',
    beds: '3 Beds',
    baths: '2 Baths',
    type: 'Luxury Condo',
    size: 'Approx. 1,100 sq ft',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=84',
    alt: 'Luxury condo living room with city style finishes',
    description: 'A refined Yorkville residence with floor-to-ceiling views, premium finishes, open-concept living, and access to world-class amenities.',
    full: 'A refined Yorkville residence designed for buyers who want premium finishes, a prestigious location, and easy access to Toronto’s luxury lifestyle. The open-concept living area, elevated interior palette, and modern amenities make it suitable for professionals, families, or investors seeking long-term value in a landmark neighbourhood.',
    features: ['Yorkville', 'Luxury Condo', 'Concierge', 'City Views']
  },
  {
    title: 'Heritage Heights, Brampton, ON',
    price: '$999,900',
    beds: '4 Beds',
    baths: '3 Baths',
    type: 'Family Home',
    size: 'Detached / Semi-Detached',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=84',
    alt: 'Modern family home exterior in a suburban community',
    description: 'A spacious family home in one of Brampton’s growing communities, offering modern living areas, a bright kitchen, and excellent nearby amenities.',
    full: 'A spacious family-focused property with practical living areas, bright interiors, and a strong community setting. This style of home is ideal for buyers looking for comfort, parking, local amenities, and access to schools, shopping, and commuter routes.',
    features: ['Family Area', 'Modern Layout', 'Parking', 'Community Living']
  },
  {
    title: 'M City, Mississauga, ON',
    price: '$799,900',
    beds: '2 Beds',
    baths: '2 Baths',
    type: 'Condo',
    size: 'High-Rise Residence',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=84',
    alt: 'Modern condo interior with premium finishes',
    description: 'A stylish high-rise condo in Mississauga’s landmark M City community with contemporary interiors, balcony views, and convenient access to Square One.',
    full: 'A contemporary Mississauga condo option for buyers who want high-rise living, strong amenities, and access to Square One, transit, shopping, and lifestyle conveniences. A strong fit for professionals, downsizers, or investors looking for modern urban demand.',
    features: ['M City', 'Balcony', 'Amenities', 'Transit Access']
  },
  {
    title: 'Bolton Townhome, Caledon/Bolton, ON',
    price: 'Contact for Price',
    beds: '3 Beds + Den',
    baths: '3 Baths',
    type: 'Townhome',
    size: 'Flexible Den Space',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=84',
    alt: 'Modern townhome exterior with driveway and front entry',
    description: 'A modern townhome with flexible den space, open living, upgraded kitchen, and excellent access to schools, parks, and commuter routes.',
    full: 'A modern townhome option offering flexible den space for work, guests, or family needs. The layout supports everyday comfort while the location gives access to parks, schools, and major routes for commuters moving through the west GTA.',
    features: ['Townhome', 'Den', 'Family-Friendly', 'Upgraded Kitchen']
  },
  {
    title: 'Downtown Toronto Investment Condo',
    price: '$689,900',
    beds: '1+1 Beds',
    baths: '1 Bath',
    type: 'Investment Condo',
    size: 'Urban Suite',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=84',
    alt: 'Downtown condo bedroom and interior space',
    description: 'A smart investment opportunity in a high-demand downtown pocket, ideal for professionals, investors, or first-time buyers.',
    full: 'A practical downtown condo opportunity positioned for buyers who want access, rental demand, and urban convenience. The 1+1 layout gives added flexibility for a home office, guest space, or investment positioning.',
    features: ['Investment', 'Downtown', 'Rental Demand', 'Transit']
  },
  {
    title: 'Oakville Executive Home',
    price: '$1,899,000',
    beds: '4 Beds',
    baths: '4 Baths',
    type: 'Detached Home',
    size: 'Executive Residence',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=84',
    alt: 'Luxury executive home exterior with landscaped entry',
    description: 'An elegant executive residence with premium finishes, landscaped outdoor space, and a highly desirable west GTA location.',
    full: 'An elegant executive-style residence for buyers looking for space, premium finishes, outdoor appeal, and a desirable west GTA location. This style of property suits families and professionals who want a higher-end lifestyle setting with long-term value potential.',
    features: ['Luxury Home', 'Executive Area', 'Spacious Lot', 'Premium Finish']
  }
];

const grid = document.getElementById('listingGrid');
const modal = document.getElementById('listingModal');
const modalContent = document.getElementById('modalContent');

function listingCard(listing, index) {
  return `
    <article class="listing-card reveal">
      <div class="listing-image-wrap">
        <img src="${listing.image}" alt="${listing.alt}" loading="lazy" />
        <span class="listing-type">${listing.type}</span>
      </div>
      <div class="listing-body">
        <div class="price">${listing.price}</div>
        <h3>${listing.title}</h3>
        <div class="meta">
          <span>${listing.beds}</span>
          <span>${listing.baths}</span>
          <span>${listing.size}</span>
        </div>
        <p>${listing.description}</p>
        <div class="chips">${listing.features.map(feature => `<span>${feature}</span>`).join('')}</div>
        <div class="card-actions">
          <button class="btn btn-outline" type="button" data-listing-index="${index}">View Details</button>
          <a class="btn btn-primary" href="https://wa.me/${phone.replace('+','')}?text=${whatsappMessage}" target="_blank" rel="noopener">Call / WhatsApp</a>
        </div>
      </div>
    </article>
  `;
}

function renderListings() {
  grid.innerHTML = listings.map(listingCard).join('');
}

function openModal(index) {
  const listing = listings[index];
  modalContent.innerHTML = `
    <img class="modal-image" src="${listing.image}" alt="${listing.alt}" />
    <div class="modal-body">
      <div class="price">${listing.price}</div>
      <h2 id="modalTitle">${listing.title}</h2>
      <div class="chips">${listing.features.map(feature => `<span>${feature}</span>`).join('')}</div>
      <div class="modal-detail-grid">
        <div><span>Beds</span><strong>${listing.beds}</strong></div>
        <div><span>Baths</span><strong>${listing.baths}</strong></div>
        <div><span>Type</span><strong>${listing.type}</strong></div>
        <div><span>Size</span><strong>${listing.size}</strong></div>
      </div>
      <p>${listing.full}</p>
      <div class="modal-actions">
        <a class="btn btn-primary" href="tel:${phone}">Call Benn</a>
        <a class="btn btn-outline" href="mailto:benn.realtor@gmail.com?subject=Inquiry%20about%20${encodeURIComponent(listing.title)}">Email Benn</a>
        <a class="btn btn-gold" href="https://wa.me/${phone.replace('+','')}?text=${encodeURIComponent(`Hi Benn, I want details about ${listing.title}.`)}" target="_blank" rel="noopener">Message on WhatsApp</a>
      </div>
    </div>
  `;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

renderListings();

document.addEventListener('click', (event) => {
  const target = event.target;
  if (target.matches('[data-listing-index]')) {
    openModal(Number(target.dataset.listingIndex));
  }
  if (target.matches('[data-close-modal]')) {
    closeModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('active')) closeModal();
});

const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
mobileToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    mobileToggle.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
